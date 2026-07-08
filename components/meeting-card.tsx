"use client"

import { useState } from "react"
import { CalendarDays, ChevronDown, Hash, ExternalLink, Building2, Handshake, Info } from "lucide-react"
import type { MeetingMinute } from "@/lib/data"
import { cn } from "@/lib/utils"

function StatementBlock({
  icon: Icon,
  label,
  sublabel,
  text,
  tone,
}: {
  icon: React.ElementType
  label: string
  sublabel: string
  text: string
  tone: "s" | "p"
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="mb-2.5 flex items-center gap-2">
        <span
          className={cn(
            "flex size-7 items-center justify-center rounded-md",
            tone === "s" ? "bg-primary/10 text-primary" : "bg-chart-2/15 text-chart-2",
          )}
        >
          <Icon className="size-4" aria-hidden="true" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-foreground">{label}</p>
          <p className="text-[0.7rem] text-muted-foreground">{sublabel}</p>
        </div>
      </div>
      <ul className="space-y-1.5">
        {text
          .split("\n")
          .filter(Boolean)
          .map((line, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-foreground/90">
              <span
                className={cn(
                  "mt-2 size-1 shrink-0 rounded-full",
                  tone === "s" ? "bg-primary/60" : "bg-chart-2/60",
                )}
                aria-hidden="true"
              />
              <span>{line}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}

export function MeetingCard({
  meeting,
  index,
  highlighted = false,
}: {
  meeting: MeetingMinute
  index: number
  highlighted?: boolean
}) {
  const [open, setOpen] = useState(false)
  const panelId = `meeting-panel-${meeting.id}`

  return (
    <div
      id={`meeting-${meeting.id}`}
      className={cn(
        "overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-300 hover:shadow-md",
        highlighted ? "border-primary ring-2 ring-primary/40" : "border-border",
      )}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start gap-4 p-5 text-left outline-none transition-colors hover:bg-accent/40 focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary">
          {index + 1}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-secondary px-2 py-0.5 text-[0.7rem] font-medium text-secondary-foreground">
              {meeting.projectType}
            </span>
            <h3 className="text-pretty text-sm font-semibold text-foreground">{meeting.title}</h3>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1.5">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-4 text-muted-foreground" aria-hidden="true" />
              <span className="sr-only">회의일: </span>
              <span className="text-sm text-foreground">{meeting.date}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Hash className="size-4 text-muted-foreground" aria-hidden="true" />
              <span className="sr-only">회의 ID: </span>
              <span className="text-sm text-foreground">{meeting.id}</span>
            </span>
          </div>
        </div>

        <ChevronDown
          className={cn(
            "mt-1 size-5 shrink-0 text-muted-foreground transition-transform duration-200",
            open && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div id={panelId} className="space-y-4 border-t border-border bg-secondary/40 px-5 py-4">
          <div className="grid gap-3 md:grid-cols-2">
            <StatementBlock
              icon={Building2}
              label="Company S"
              sublabel="수요기업 발언"
              text={meeting.companyS}
              tone="s"
            />
            <StatementBlock
              icon={Handshake}
              label="Company P"
              sublabel="협력기업 발언"
              text={meeting.companyP}
              tone="p"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <a
              href={meeting.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              <ExternalLink className="size-4" aria-hidden="true" />
              관련 기사 원문
            </a>
          </div>

          <details className="group rounded-lg border border-dashed border-border bg-card/60 px-4 py-3">
            <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:text-foreground">
              <Info className="size-4" aria-hidden="true" />
              시나리오 노트
              <ChevronDown
                className="ml-auto size-4 transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <div className="mt-2.5 space-y-1 border-t border-border pt-2.5">
              {meeting.scenarioNote
                .split("\n")
                .filter(Boolean)
                .map((line, i) => (
                  <p key={i} className="text-xs leading-relaxed text-muted-foreground">
                    {line}
                  </p>
                ))}
            </div>
          </details>
        </div>
      )}
    </div>
  )
}
