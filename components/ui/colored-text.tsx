import { cn } from "@/lib/utils"

export function ColoredText({
  children,
  className,
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn("bg-gradient-to-r from-red-700 to-gray-900 bg-clip-text text-transparent", className)}>
      {children}
    </span>
  )
}
