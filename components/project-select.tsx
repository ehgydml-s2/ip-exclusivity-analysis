"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ProjectSelectOption {
  code: string
  label: string
  hasAnalysis: boolean
  meetingCount: number
}

interface ProjectSelectProps {
  value: string
  onChange: (value: string) => void
  options: ProjectSelectOption[]
  placeholder?: string
  className?: string
}

export function ProjectSelect({
  value,
  onChange,
  options,
  placeholder = "과제코드를 선택하세요",
  className,
}: ProjectSelectProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  const selectedOption = options.find((opt) => opt.code === value)

  return (
    <div ref={containerRef} className="relative w-full sm:max-w-md sm:flex-1">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "h-10 w-full appearance-none rounded-lg border border-input bg-background px-3.5 pr-10 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 flex items-center justify-between",
          !value && "text-muted-foreground",
          className,
        )}
      >
        <span className="text-left">
          {selectedOption
            ? `${selectedOption.code}(${selectedOption.meetingCount})`
            : placeholder}
        </span>
      </button>
      <ChevronDown
        className={cn(
          "pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground transition-transform",
          open && "rotate-180",
        )}
        aria-hidden="true"
      />

      {open && (
        <ul
          className="absolute z-20 mt-1.5 w-full overflow-hidden rounded-lg border border-border bg-popover shadow-lg"
          role="listbox"
        >
          {options.map((option) => (
            <li key={option.code} role="option" aria-selected={value === option.code}>
              <button
                type="button"
                onClick={() => {
                  onChange(option.code)
                  setOpen(false)
                }}
                className={cn(
                  "flex w-full items-center px-3.5 py-2.5 text-left text-sm transition-colors hover:bg-accent/50",
                  value === option.code && "bg-accent/30",
                  option.hasAnalysis && "font-bold",
                )}
              >
                {option.code}({option.meetingCount})
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
