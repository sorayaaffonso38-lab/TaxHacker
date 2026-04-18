import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { ColoredText } from "@/components/ui/colored-text"
import { getCurrentUser } from "@/lib/auth"
import { getSettings, updateSettings } from "@/models/settings"
import { Banknote, ChartBarStacked, FolderOpenDot, Key, TextCursorInput, X } from "lucide-react"
import { revalidatePath } from "next/cache"
import Image from "next/image"
import Link from "next/link"

export async function WelcomeWidget() {
  const user = await getCurrentUser()
  const settings = await getSettings(user.id)

  return (
    <Card className="flex flex-col lg:flex-row items-start gap-10 p-10 w-full">
      <Image src="/logo/1024.png" alt="Logo" width={256} height={256} className="w-32 h-32 lg:w-64 lg:h-64" />
      <div className="flex flex-col">
        <CardTitle className="flex items-center justify-between">
          <span className="text-2xl font-bold">
            <ColoredText>Olá! Bem-vindo ao MeiControl 👋</ColoredText>
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={async () => {
              "use server"
              await updateSettings(user.id, "is_welcome_message_hidden", "true")
              revalidatePath("/")
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        </CardTitle>
        <CardDescription className="mt-5">
          <p className="mb-3">
            Sou seu assistente financeiro com IA, feito para MEI e prestadores de serviço. Veja o que posso fazer por você:
          </p>
          <ul className="mb-5 list-disc pl-5 space-y-1">
            <li>
              <strong>Envie uma foto ou PDF</strong> e eu reconheço, categorizo e salvo automaticamente como transação.
            </li>
            <li>
              <strong>Converto moedas automaticamente</strong> e consulto cotações históricas pela data da transação.
            </li>
            <li>
              <strong>Categorização automática por IA</strong>: despesas operacionais, serviços prestados, impostos e mais.
            </li>
            <li>
              <strong>Lembro você do vencimento do DAS</strong> e outras obrigações fiscais do MEI.
            </li>
            <li>
              Todos os <strong>prompts de IA são configuráveis</strong>: campos, categorias e projetos do seu jeito.
            </li>
            <li>
              <strong>Exporte para CSV</strong> para facilitar a declaração do IR ou enviar ao seu contador.
            </li>
            <li>
              Ainda sou <strong>jovem e posso errar</strong>. Sempre valide os dados com seu contador!
            </li>
          </ul>
          <p className="mb-3 text-amber-600 font-medium">
            ⚠️ O MeiControl não substitui um contador. Use os dados gerados como apoio, não como declaração oficial.
          </p>
        </CardDescription>
        <div className="flex flex-wrap gap-2 mt-8">
          {settings.openai_api_key === "" && (
            <Link href="/settings/llm">
              <Button>
                <Key className="h-4 w-4" />
                Configure sua chave de IA aqui
              </Button>
            </Link>
          )}
          <Link href="/settings">
            <Button variant="outline">
              <Banknote className="h-4 w-4" />
              Moeda padrão: {settings.default_currency}
            </Button>
          </Link>
          <Link href="/settings/categories">
            <Button variant="outline">
              <ChartBarStacked className="h-4 w-4" />
              Categorias
            </Button>
          </Link>
          <Link href="/settings/projects">
            <Button variant="outline">
              <FolderOpenDot className="h-4 w-4" />
              Projetos
            </Button>
          </Link>
          <Link href="/settings/fields">
            <Button variant="outline">
              <TextCursorInput className="h-4 w-4" />
              Campos Personalizados
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
