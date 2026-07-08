"use client"

import { useMemo, useState } from "react"
import { Search, ScanSearch, AlertCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projectExists, findProjectsByType, countMeetingsByProject, type ProjectTypeFilter } from "@/lib/data"
import { cn } from "@/lib/utils"

type SearchMethod = "code" | "manual"

const TYPE_OPTIONS: ProjectTypeFilter[] = ["전체", "소재", "설비"]

export function SearchPanel({
  onSearch,
  onAnalyze,
  analysisEnabled,
}: {
  onSearch: (code: string) => void
  onAnalyze: () => void
  analysisEnabled: boolean
}) {
  const [method, setMethod] = useState<SearchMethod>("code")
  const [typeFilter, setTypeFilter] = useState<ProjectTypeFilter>("전체")
  const [selectedCode, setSelectedCode] = useState("")
  const [manualCode, setManualCode] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const filteredProjects = useMemo(() => findProjectsByType(typeFilter), [typeFilter])

  const suggestions = useMemo(() => {
    const q = manualCode.trim().toLowerCase()
    if (!q) return []
    return findProjectsByType("전체")
      .filter((p) => p.code.toLowerCase().includes(q) || p.name.toLowerCase().includes(q))
      .slice(0, 6)
  }, [manualCode])

  function switchMethod(next: SearchMethod) {
    setMethod(next)
    setError(null)
    setShowSuggestions(false)
  }

  function changeType(next: ProjectTypeFilter) {
    setTypeFilter(next)
    setSelectedCode("")
    setError(null)
  }

  function handleSearch() {
    const code = method === "code" ? selectedCode : manualCode.trim()
    if (!code) {
      setError(method === "code" ? "과제코드를 선택하세요." : "존재하는 과제 코드를 입력해 주세요.")
      return
    }
    if (!projectExists(code)) {
      setError("존재하는 과제 코드를 입력해 주세요.")
      return
    }
    setError(null)
    setShowSuggestions(false)
    onSearch(code)
  }

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm" aria-label="검색 영역">
      <div className="mb-5 flex items-center gap-2">
        <Search className="size-4 text-primary" aria-hidden="true" />
        <h2 className="text-sm font-semibold tracking-tight text-foreground">과제 검색</h2>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-1 flex-col gap-4">
          {/* 검색방법 radio group */}
          <fieldset>
            <legend className="mb-2 text-xs font-medium text-muted-foreground">검색방법</legend>
            <div className="flex flex-wrap gap-2">
              {(
                [
                  { value: "code", label: "과제코드 조회" },
                  { value: "manual", label: "직접 입력" },
                ] as const
              ).map((opt) => {
                const active = method === opt.value
                return (
                  <label
                    key={opt.value}
                    className={cn(
                      "flex cursor-pointer items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors",
                      active
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border bg-background text-muted-foreground hover:bg-accent/40",
                    )}
                  >
                    <input
                      type="radio"
                      name="search-method"
                      value={opt.value}
                      checked={active}
                      onChange={() => switchMethod(opt.value)}
                      className="size-4 accent-primary"
                    />
                    {opt.label}
                  </label>
                )
              })}
            </div>
          </fieldset>

          {/* 검색어 area */}
          <div>
            <span className="mb-2 block text-xs font-medium text-muted-foreground">검색어</span>

            {method === "code" ? (
              <div className="flex flex-col gap-3 sm:flex-row">
                {/* 과제 타입 selector */}
                <div className="relative w-full sm:w-40">
                  <select
                    aria-label="과제 타입 선택"
                    value={typeFilter}
                    onChange={(e) => changeType(e.target.value as ProjectTypeFilter)}
                    className="h-10 w-full appearance-none rounded-lg border border-input bg-background px-3.5 pr-10 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
                  >
                    {TYPE_OPTIONS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                </div>

                {/* 과제코드 dropdown (filtered by type) */}
                <div className="relative w-full sm:max-w-md sm:flex-1">
                  <select
                    aria-label="과제코드 선택"
                    value={selectedCode}
                    onChange={(e) => {
                      setSelectedCode(e.target.value)
                      setError(null)
                    }}
                    className={cn(
                      "h-10 w-full appearance-none rounded-lg border border-input bg-background px-3.5 pr-10 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40",
                      !selectedCode && "text-muted-foreground",
                    )}
                  >
                    <option value="" disabled>
                      {`과제코드를 선택하세요 (${filteredProjects.length}건)`}
                    </option>
                    {filteredProjects.map((p) => (
                      <option key={p.code} value={p.code}>
                        {`${p.code}(${countMeetingsByProject(p.code)})`}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                </div>
              </div>
            ) : (
              <div className="relative max-w-md">
                <input
                  type="text"
                  aria-label="과제코드 입력"
                  value={manualCode}
                  onChange={(e) => {
                    setManualCode(e.target.value)
                    setShowSuggestions(true)
                    setError(null)
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 120)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.nativeEvent.isComposing && e.keyCode !== 229) handleSearch()
                  }}
                  placeholder="과제코드를 입력하세요"
                  className="h-10 w-full rounded-lg border border-input bg-background px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
                />

                {showSuggestions && suggestions.length > 0 && (
                  <ul
                    className="absolute z-20 mt-1.5 w-full overflow-hidden rounded-lg border border-border bg-popover shadow-lg"
                    role="listbox"
                  >
                    {suggestions.map((p) => (
                      <li key={p.code} role="option" aria-selected={manualCode.trim() === p.code}>
                        <button
                          type="button"
                          onMouseDown={(e) => {
                            e.preventDefault()
                            setManualCode(p.code)
                            setShowSuggestions(false)
                            setError(null)
                          }}
                          className="flex w-full items-center gap-2 px-3.5 py-2.5 text-left text-sm transition-colors hover:bg-accent/50"
                        >
                          <span className="rounded bg-secondary px-1.5 py-0.5 text-[0.7rem] font-medium text-secondary-foreground">
                            {p.category}
                          </span>
                          <span className="font-medium text-foreground">{p.code}</span>
                          <span className="truncate text-xs text-muted-foreground">{p.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {error && (
              <p className="mt-2 flex items-center gap-1.5 text-sm text-destructive" role="alert">
                <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
                {error}
              </p>
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex shrink-0 gap-2.5">
          <Button size="lg" onClick={handleSearch} className="gap-1.5">
            <Search className="size-4" aria-hidden="true" />
            조회
          </Button>
          <Button
            size="lg"
            variant="outline"
            disabled={!analysisEnabled}
            onClick={onAnalyze}
            className="gap-1.5 border-primary/30 text-primary hover:bg-primary/5 disabled:opacity-50"
          >
            <ScanSearch className="size-4" aria-hidden="true" />
            배타성 분석
          </Button>
        </div>
      </div>
    </section>
  )
}
