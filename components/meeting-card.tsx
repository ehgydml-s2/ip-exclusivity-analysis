"use client"

import { useState } from "react"
import { CalendarDays, ChevronDown, Hash, Users, FolderKanban } from "lucide-react"
import type { MeetingMinute } from "@/lib/data"
import { cn } from "@/lib/utils"

function MetaItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-1.5">
      <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
      <span className="sr-only">{label}: </span>
      <span className="text-sm text-foreground">{value}</span>
    </div>
  )
}

export function MeetingCard({ meeting, index }: { meeting: MeetingMinute; index: number }) {
  const [open, setOpen] = useState(false)
  const panelId = `meeting-panel-${meeting.id}`
  const previewLines = meeting.content.split("\n").filter(Boolean).slice(0, 2)

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
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
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
            <MetaItem icon={CalendarDays} label="회의일" value={meeting.date} />
            <MetaItem icon={Hash} label="회의 ID" value={meeting.id} />
            <MetaItem icon={FolderKanban} label="과제코드" value={meeting.projectCode} />
          </div>

          <div className="mt-2 flex items-start gap-1.5">
            <Users className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <span className="sr-only">참석자: </span>
            <p className="text-sm text-muted-foreground">{meeting.participants.join(", ")}</p>
          </div>

          {!open && (
            <div className="mt-3 space-y-0.5">
              {previewLines.map((line, i) => (
                <p key={i} className="truncate text-sm text-foreground/70">
                  {line}
                </p>
              ))}
            </div>
          )}
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
        <div id={panelId} className="border-t border-border bg-secondary/40 px-5 py-4">
          <div className="space-y-3">
            {meeting.content.split("\n").filter(Boolean).map((para, i) => (
              <p key={i} className="text-sm leading-relaxed text-foreground">
                {para}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
