"use client"

import { useState } from "react"
import { Search, ScanSearch, AlertCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects, projectExists } from "@/lib/data"
import { cn } from "@/lib/utils"

type SearchMethod = "code" | "manual"

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
  const [selectedCode, setSelectedCode] = useState("")
  const [manualCode, setManualCode] = useState("")
  const [error, setError] = useState<string | null>(null)

  function switchMethod(next: SearchMethod) {
    setMethod(next)
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

          {/* Input area */}
          <div className="max-w-md">
            {method === "code" ? (
              <div className="relative">
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
                    과제코드를 선택하세요
                  </option>
                  {projects.map((p) => (
                    <option key={p.code} value={p.code}>
                      {p.code} — {p.name}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
              </div>
            ) : (
              <input
                type="text"
                aria-label="과제코드 입력"
                value={manualCode}
                onChange={(e) => {
                  setManualCode(e.target.value)
                  setError(null)
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.nativeEvent.isComposing && e.keyCode !== 229) handleSearch()
                }}
                placeholder="과제코드를 입력하세요"
                className="h-10 w-full rounded-lg border border-input bg-background px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
              />
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
