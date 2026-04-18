"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Bell, CheckCircle } from "lucide-react"
import Link from "next/link"

function getDasInfo() {
  const today = new Date()
  const day = today.getDate()
  const month = today.getMonth()
  const year = today.getFullYear()

  const dueDay = 20
  let dueDate: Date

  if (day <= dueDay) {
    dueDate = new Date(year, month, dueDay)
  } else {
    dueDate = new Date(year, month + 1, dueDay)
  }

  const daysUntil = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  const monthName = dueDate.toLocaleString("pt-BR", { month: "long" })

  return { daysUntil, monthName, dueDate }
}

export function DasReminderWidget() {
  const { daysUntil, monthName } = getDasInfo()

  const isUrgent = daysUntil <= 3
  const isWarning = daysUntil <= 7 && daysUntil > 3
  const isOk = daysUntil > 7

  return (
    <Card
      className={`w-full border-2 ${
        isUrgent
          ? "border-red-400 bg-red-50"
          : isWarning
            ? "border-amber-400 bg-amber-50"
            : "border-emerald-300 bg-emerald-50"
      }`}
    >
      <CardContent className="flex items-center gap-4 p-4">
        {isUrgent && <AlertTriangle className="h-8 w-8 text-red-500 shrink-0" />}
        {isWarning && <Bell className="h-8 w-8 text-amber-500 shrink-0" />}
        {isOk && <CheckCircle className="h-8 w-8 text-emerald-500 shrink-0" />}

        <div className="flex-1">
          <p className={`font-bold text-sm ${isUrgent ? "text-red-700" : isWarning ? "text-amber-700" : "text-emerald-700"}`}>
            {isUrgent && "⚠️ DAS vence em breve!"}
            {isWarning && "🔔 Lembrete: DAS se aproximando"}
            {isOk && "✅ DAS em dia"}
          </p>
          <p className={`text-sm ${isUrgent ? "text-red-600" : isWarning ? "text-amber-600" : "text-emerald-600"}`}>
            {daysUntil === 0
              ? "O DAS vence HOJE (dia 20)!"
              : daysUntil === 1
                ? "O DAS vence amanhã (dia 20)!"
                : `O DAS de ${monthName} vence em ${daysUntil} dias (dia 20)`}
          </p>
        </div>

        <Link
          href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/pagamento-mensal-obrigatorio-das"
          target="_blank"
          className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${
            isUrgent
              ? "bg-red-500 text-white hover:bg-red-600"
              : isWarning
                ? "bg-amber-500 text-white hover:bg-amber-600"
                : "bg-emerald-500 text-white hover:bg-emerald-600"
          } transition-colors`}
        >
          Pagar DAS
        </Link>
      </CardContent>
    </Card>
  )
}
