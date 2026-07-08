"use client"

import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { MessageSquareQuote, User, ArrowRightLeft, Tag, CalendarDays } from "lucide-react"
import type { Fact, FactSpeaker, ClaimDirection } from "@/lib/data"
import { cn } from "@/lib/utils"

// ---- Context: makes the fact lookup available to any FactRef/FactText descendant ----
const FactMapContext = createContext<Record<string, Fact>>({})

export function FactMapProvider({ facts, children }: { facts: Fact[]; children: React.ReactNode }) {
  const map = useMemo(() => Object.fromEntries(facts.map((f) => [f.id, f])), [facts])
  return <FactMapContext.Provider value={map}>{children}</FactMapContext.Provider>
}

function useFact(id: string): Fact | undefined {
  return useContext(FactMapContext)[id]
}

const speakerStyle: Record<FactSpeaker, string> = {
  "Company S": "bg-primary/10 text-primary ring-primary/20",
  "Company P": "bg-chart-5/10 text-chart-5 ring-chart-5/20",
  기타: "bg-muted text-muted-foreground ring-border",
}

const claimLabel: Record<ClaimDirection, string> = {
  "S Favorable": "S사 유리",
  "P Favorable": "P사 유리",
  Neutral: "중립",
}

const claimStyle: Record<ClaimDirection, string> = {
  "S Favorable": "bg-primary/10 text-primary ring-primary/20",
  "P Favorable": "bg-chart-5/10 text-chart-5 ring-chart-5/20",
  Neutral: "bg-muted text-muted-foreground ring-border",
}

type Coords = { top: number; left: number; above: boolean }

const TOOLTIP_WIDTH = 340

// ---- Inline fact reference chip with a hover/focus tooltip ----
export function FactRef({ id }: { id: string }) {
  const fact = useFact(id)
  const [coords, setCoords] = useState<Coords | null>(null)
  const ref = useRef<HTMLButtonElement>(null)

  const show = useCallback(() => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const left = Math.max(16, Math.min(r.left, window.innerWidth - TOOLTIP_WIDTH - 16))
    const above = r.bottom > window.innerHeight - 260
    const top = above ? r.top - 8 : r.bottom + 8
    setCoords({ top, left, above })
  }, [])

  const hide = useCallback(() => setCoords(null), [])

  return (
    <>
      <button
        ref={ref}
        type="button"
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        aria-label={fact ? `근거 ${id}: ${fact.text}` : `근거 ${id}`}
        className={cn(
          "mx-0.5 inline-flex items-center rounded-md border border-primary/30 bg-primary/5 px-1.5 py-0 align-baseline font-mono text-[0.72rem] font-semibold text-primary outline-none transition-colors hover:bg-primary/15 focus-visible:ring-2 focus-visible:ring-ring",
          coords && "bg-primary text-primary-foreground",
        )}
      >
        {id}
      </button>
      {coords &&
        fact &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="tooltip"
            style={{
              top: coords.top,
              left: coords.left,
              width: TOOLTIP_WIDTH,
              transform: coords.above ? "translateY(-100%)" : undefined,
            }}
            className="pointer-events-none fixed z-[60] max-w-[calc(100vw-2rem)] rounded-xl border border-border bg-popover p-3.5 text-popover-foreground shadow-xl"
          >
            <div className="mb-2 flex flex-wrap items-center gap-1.5">
              <span className="rounded-md bg-primary px-1.5 py-0.5 font-mono text-[0.72rem] font-bold text-primary-foreground">
                {fact.id}
              </span>
              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.7rem] font-semibold ring-1",
                  speakerStyle[fact.speaker],
                )}
              >
                <User className="size-3" aria-hidden="true" />
                {fact.speaker}
              </span>
              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.7rem] font-semibold ring-1",
                  claimStyle[fact.claimDirection],
                )}
              >
                <ArrowRightLeft className="size-3" aria-hidden="true" />
                {claimLabel[fact.claimDirection]}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-[0.7rem] font-medium text-secondary-foreground">
                <Tag className="size-3" aria-hidden="true" />
                {fact.factType}
              </span>
            </div>

            <p className="mb-2 text-sm font-semibold leading-snug text-foreground">{fact.text}</p>

            <div className="mb-2 flex items-start gap-1.5 rounded-lg border border-border bg-secondary/40 p-2">
              <MessageSquareQuote className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-xs leading-relaxed text-foreground">{fact.originalText}</p>
            </div>

            <p className="mb-2 text-xs leading-relaxed text-muted-foreground">{fact.reason}</p>

            {(fact.meetingTitle || fact.meetingId) && (
              <div className="flex items-center gap-1.5 border-t border-border pt-2 text-[0.7rem] text-muted-foreground">
                <CalendarDays className="size-3" aria-hidden="true" />
                <span className="font-medium text-foreground">{fact.meetingId}</span>
                {fact.meetingTitle && <span className="truncate">· {fact.meetingTitle}</span>}
                {fact.meetingDate && <span className="ml-auto shrink-0">{fact.meetingDate}</span>}
              </div>
            )}
          </div>,
          document.body,
        )}
    </>
  )
}

// ---- Renders a string, turning inline "F123" tokens into hoverable FactRef chips ----
const FACT_SPLIT = /(F\d{3})/g
const FACT_EXACT = /^F\d{3}$/

export function FactText({ children, className }: { children: string; className?: string }) {
  const parts = children.split(FACT_SPLIT)
  return (
    <span className={className}>
      {parts.map((part, i) =>
        FACT_EXACT.test(part) ? <FactRef key={`${part}-${i}`} id={part} /> : <span key={i}>{part}</span>,
      )}
    </span>
  )
}
