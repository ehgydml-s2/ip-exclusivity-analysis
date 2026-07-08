"use client"

import { useMemo, useState } from "react"
import { ShieldCheck, FileSearch, Inbox } from "lucide-react"
import { SearchPanel } from "@/components/search-panel"
import { MeetingCard } from "@/components/meeting-card"
import { AnalysisResultView } from "@/components/analysis/analysis-result"
import { findMeetingsByProject, analysisResults, projects } from "@/lib/data"

export default function Page() {
  const [searchedCode, setSearchedCode] = useState<string | null>(null)
  const [showAnalysis, setShowAnalysis] = useState(false)

  const meetings = useMemo(
    () => (searchedCode ? findMeetingsByProject(searchedCode) : []),
    [searchedCode],
  )
  const project = projects.find((p) => p.code === searchedCode)
  const analysis = searchedCode ? analysisResults[searchedCode] : undefined

  function handleSearch(code: string) {
    setSearchedCode(code)
    setShowAnalysis(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-10 border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-4 sm:px-6">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <ShieldCheck className="size-5" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-base font-semibold tracking-tight text-foreground">IP 배타성 분석 시스템</h1>
            <p className="text-xs text-muted-foreground">IP Exclusivity Analysis System</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-6">
        {/* Search Area */}
        <SearchPanel
          onSearch={handleSearch}
          onAnalyze={() => setShowAnalysis(true)}
          analysisEnabled={searchedCode !== null}
        />

        {/* Result Area */}
        {searchedCode ? (
          <div className="space-y-6">
            {showAnalysis && analysis && (
              <AnalysisResultView result={analysis} projectName={project?.name} />
            )}

            {showAnalysis && !analysis && (
              <div className="rounded-2xl border border-dashed border-primary/30 bg-primary/5 px-6 py-10 text-center">
                <p className="text-sm font-medium text-foreground">
                  이 과제의 배타성 분석 결과는 준비 중입니다
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project ? `${project.code} · ${project.name}` : ""} 회의록 데이터를 기반으로 한 분석 리포트가 곧 제공됩니다.
                </p>
              </div>
            )}

            {!showAnalysis && (
              <section aria-label="회의록 목록">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FileSearch className="size-4 text-primary" aria-hidden="true" />
                    <h2 className="text-sm font-semibold tracking-tight text-foreground">
                      회의록 목록
                      <span className="ml-2 rounded-full bg-secondary px-2 py-0.5 text-xs font-normal text-muted-foreground">
                        {meetings.length}건
                      </span>
                    </h2>
                  </div>
                  {project && (
                    <p className="text-xs text-muted-foreground">
                      {project.code} · {project.name}
                    </p>
                  )}
                </div>

                <div className="max-h-[70vh] space-y-3 overflow-y-auto pr-1">
                  {meetings.map((m, i) => (
                    <MeetingCard key={m.id} meeting={m} index={i} />
                  ))}
                </div>
              </section>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 px-6 py-20 text-center">
            <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-secondary text-muted-foreground">
              <Inbox className="size-6" aria-hidden="true" />
            </div>
            <p className="text-sm font-medium text-foreground">조회된 결과가 없습니다</p>
            <p className="mt-1 text-sm text-muted-foreground">
              과제코드를 선택하거나 입력한 뒤 조회 버튼을 눌러 회의록을 확인하세요.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
