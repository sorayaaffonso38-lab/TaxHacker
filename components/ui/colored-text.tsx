import { cn } from "@/lib/utils"

export function ColoredText({
  children,
  className,
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn("bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent", className)}>
      {children}
    </span>
  )
}
