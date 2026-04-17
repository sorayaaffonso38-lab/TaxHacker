import { ColoredText } from "@/components/ui/colored-text"
import config from "@/lib/config"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
      <header className="py-6 px-4 md:px-8 bg-white/90 backdrop-blur-xl shadow-lg border-b border-emerald-100 fixed w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Image
                src="/logo/256.png"
                alt="Logo"
                width={32}
                height={32}
                className="h-8 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300" />
            </div>
            <ColoredText className="text-2xl font-bold">MeiControl</ColoredText>
          </Link>
          <Link
            href="/enter"
            className="cursor-pointer font-semibold px-5 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 text-sm shadow-lg"
          >
            Entrar
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 via-teal-100/30 to-blue-100/50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-10 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full opacity-10 blur-3xl animate-pulse" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-3 rounded-full border-2 border-emerald-600/40 text-sm font-semibold mb-6 shadow-lg bg-white/60 text-emerald-700">
              🇧🇷 Feito para MEI e pequenas empresas brasileiras
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-gray-900 via-emerald-700 to-blue-700 bg-clip-text text-transparent pb-2">
              Chega de perder horas organizando notas fiscais e recibos
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
              O MeiControl usa IA para ler, organizar e categorizar automaticamente suas despesas — tudo em um só lugar, para você focar no que importa: seu negócio.
            </p>
            <div className="flex gap-4 justify-center text-sm md:text-lg flex-wrap">
              <Link
                href="/enter"
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-bold rounded-full hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 border-2 border-white/20"
              >
                Começar Grátis ✨
              </Link>
              <Link
                href={`mailto:${config.app.supportEmail}`}
                className="px-8 py-4 border-2 border-emerald-300 text-gray-800 font-bold rounded-full hover:bg-emerald-50 transition-all duration-300 hover:scale-105 bg-white/80"
              >
                Falar com a gente 💬
              </Link>
            </div>
          </div>
          <div className="relative aspect-auto rounded-3xl overflow-hidden shadow-2xl ring-4 ring-emerald-200/50">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-teal-500/5 to-blue-500/10 z-10" />
            <video className="w-full h-auto" autoPlay loop muted playsInline poster="/landing/ai-scanner-big.webp">
              <source src="/landing/video.mp4" type="video/mp4" />
              <Image src="/landing/ai-scanner-big.webp" alt="MeiControl" width={1728} height={1080} priority />
            </video>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-blue-50/50" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="flex flex-col gap-3 mb-4">
              <span className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Controle total das suas finanças
              </span>
              <span className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Do recibo ao relatório, tudo no piloto automático
              </span>
            </h2>
          </div>

          {/* AI Scanner Feature */}
          <div className="flex flex-wrap items-center gap-12 mb-20 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 p-8 rounded-3xl shadow-xl ring-2 ring-blue-100 hover:shadow-2xl transition-all duration-500 group">
            <div className="flex-1 min-w-60">
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-bold mb-4 shadow-lg">
                🤖 IA Avançada
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                Leitura automática de notas e recibos
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3 text-lg">✨</span>
                  Envie PDF, foto ou imagem — a IA lê automaticamente
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3 text-lg">✨</span>
                  Extrai data, valor, fornecedor e itens sem você digitar nada
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3 text-lg">✨</span>
                  Funciona com qualquer nota fiscal, recibo ou comprovante
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3 text-lg">✨</span>
                  Organiza tudo em uma base de dados estruturada
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3 text-lg">✨</span>
                  Envio em lote — processa vários arquivos de uma vez
                </li>
              </ul>
            </div>
            <div className="flex-1 relative aspect-auto rounded-3xl overflow-hidden shadow-2xl ring-4 ring-blue-200 hover:scale-105 transition-all duration-500">
              <Image src="/landing/ai-scanner.webp" alt="Leitura Automática de Documentos" width={1900} height={1524} />
            </div>
          </div>

          {/* Multi-currency Feature */}
          <div className="flex flex-wrap items-center gap-12 mb-20 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30 p-8 rounded-3xl shadow-xl ring-2 ring-emerald-100 hover:shadow-2xl transition-all duration-500 group flex-row-reverse">
            <div className="flex-1 min-w-60">
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-bold mb-4 shadow-lg">
                💱 Multi-moeda
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                Converte moedas automaticamente — até cripto
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-emerald-600 mr-3 text-lg">💰</span>
                  Detecta moeda estrangeira e converte para R$ automaticamente
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-600 mr-3 text-lg">💰</span>
                  Usa cotação histórica da data da transação
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-600 mr-3 text-lg">💰</span>
                  Suporte a 170+ moedas mundiais
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-600 mr-3 text-lg">💰</span>
                  Compatível com criptomoedas (BTC, ETH e outros)
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-600 mr-3 text-lg">💰</span>
                  Edição manual quando necessário
                </li>
              </ul>
            </div>
            <div className="flex-1 relative aspect-auto rounded-3xl overflow-hidden shadow-2xl ring-4 ring-emerald-200 hover:scale-105 transition-all duration-500">
              <Image src="/landing/multi-currency.webp" alt="Conversão de Moedas" width={1400} height={1005} />
            </div>
          </div>

          {/* Transaction Table Feature */}
          <div className="flex flex-wrap items-center gap-12 mb-20 bg-gradient-to-br from-white via-teal-50/30 to-cyan-50/30 p-8 rounded-3xl shadow-xl ring-2 ring-teal-100 hover:shadow-2xl transition-all duration-500 group flex-row-reverse">
            <div className="flex-1 relative aspect-auto rounded-3xl overflow-hidden shadow-2xl ring-4 ring-teal-200 hover:scale-105 transition-all duration-500">
              <Image src="/landing/transactions.webp" alt="Tabela de Transações" width={2000} height={1279} />
            </div>
            <div className="flex-1 min-w-60">
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-sm font-bold mb-4 shadow-lg">
                🔍 Categorias e Filtros
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent">
                Organize tudo com categorias, projetos e campos personalizados
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3 text-lg">📊</span>
                  Crie categorias livres: despesas MEI, pró-labore, fornecedores...
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3 text-lg">📊</span>
                  Adicione, edite e gerencie todas as suas transações
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3 text-lg">📊</span>
                  Filtre por qualquer coluna, categoria ou período
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3 text-lg">📊</span>
                  Escolha quais colunas exibir na tabela
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3 text-lg">📊</span>
                  Importe transações via CSV
                </li>
              </ul>
            </div>
          </div>

          {/* Invoice Generator */}
          <div className="flex flex-wrap items-center gap-12 mb-20 bg-gradient-to-br from-white via-violet-50/30 to-purple-50/30 p-8 rounded-3xl shadow-xl ring-2 ring-violet-100 hover:shadow-2xl transition-all duration-500 group">
            <div className="max-w-sm flex-1 relative aspect-auto rounded-3xl overflow-hidden shadow-2xl ring-4 ring-violet-200 hover:scale-105 transition-all duration-500">
              <Image src="/landing/invoice-generator.webp" alt="Gerador de Faturas" width={1800} height={1081} />
            </div>
            <div className="flex-1 min-w-60">
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 text-white text-sm font-bold mb-4 shadow-lg">
                📋 Gerador de Faturas
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent">
                Crie faturas profissionais em segundos
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-violet-600 mr-3 text-lg">📄</span>
                  Gerador completo para faturas em qualquer idioma
                </li>
                <li className="flex items-center">
                  <span className="text-violet-600 mr-3 text-lg">📄</span>
                  Edite qualquer campo, incluindo rótulos e títulos
                </li>
                <li className="flex items-center">
                  <span className="text-violet-600 mr-3 text-lg">📄</span>
                  Exporte em PDF ou salve como transação
                </li>
                <li className="flex items-center">
                  <span className="text-violet-600 mr-3 text-lg">📄</span>
                  Salve templates para reutilizar depois
                </li>
                <li className="flex items-center">
                  <span className="text-violet-600 mr-3 text-lg">📄</span>
                  Suporte nativo a impostos incluídos ou excluídos (ISS, ICMS, etc.)
                </li>
              </ul>
            </div>
          </div>

          {/* Custom Fields & Categories */}
          <div className="flex flex-wrap items-center gap-12 mb-20 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/30 p-8 rounded-3xl shadow-xl ring-2 ring-orange-100 hover:shadow-2xl transition-all duration-500 group">
            <div className="flex-1 min-w-60">
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 text-white text-sm font-bold mb-4 shadow-lg">
                🎨 IA Personalizável
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent">
                Configure a IA do jeito que o seu negócio precisa
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-orange-600 mr-3 text-lg">🔧</span>
                  Crie campos e categorias personalizados e ensine a IA a preenchê-los
                </li>
                <li className="flex items-center">
                  <span className="text-orange-600 mr-3 text-lg">🔧</span>
                  Extraia qualquer informação adicional que você precisar
                </li>
                <li className="flex items-center">
                  <span className="text-orange-600 mr-3 text-lg">🔧</span>
                  Categorize automaticamente por projeto ou tipo de despesa
                </li>
                <li className="flex items-center">
                  <span className="text-orange-600 mr-3 text-lg">🔧</span>
                  Peça à IA para avaliar risco ou qualquer outro critério
                </li>
              </ul>
            </div>
            <div className="flex-1 relative aspect-auto rounded-3xl overflow-hidden shadow-2xl ring-4 ring-orange-200 hover:scale-105 transition-all duration-500">
              <Image src="/landing/custom-llm.webp" alt="IA Personalizável" width={1800} height={1081} />
            </div>
          </div>

          {/* Data Export */}
          <div className="flex flex-wrap items-center gap-12 mb-20 bg-gradient-to-br from-white via-slate-50/30 to-gray-50/30 p-8 rounded-3xl shadow-xl ring-2 ring-slate-100 hover:shadow-2xl transition-all duration-500 group flex-row-reverse">
            <div className="flex-1 min-w-60">
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-slate-600 to-gray-700 text-white text-sm font-bold mb-4 shadow-lg">
                📦 Seus Dados, Suas Regras
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-slate-700 to-gray-700 bg-clip-text text-transparent">
                Privacidade total — exporte quando quiser
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-slate-600 mr-3 text-lg">📤</span>
                  Use o servidor próprio para 100% de privacidade dos dados
                </li>
                <li className="flex items-center">
                  <span className="text-slate-600 mr-3 text-lg">📤</span>
                  Exporte transações em CSV para declaração do IR e DAS
                </li>
                <li className="flex items-center">
                  <span className="text-slate-600 mr-3 text-lg">📤</span>
                  Busca em texto completo em todos os documentos
                </li>
                <li className="flex items-center">
                  <span className="text-slate-600 mr-3 text-lg">📤</span>
                  Baixe um backup completo dos seus dados a qualquer momento
                </li>
              </ul>
            </div>
            <div className="flex-1 relative aspect-auto rounded-3xl overflow-hidden shadow-2xl ring-4 ring-slate-200 hover:scale-105 transition-all duration-500">
              <Image src="/landing/export.webp" alt="Exportação" width={1200} height={1081} />
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section
        id="start"
        className="py-20 px-8 bg-gradient-to-br from-white via-emerald-50/20 to-blue-50/20 scroll-mt-20 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/20 to-blue-100/20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Escolha como usar o MeiControl
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            {/* Self-Hosted Version */}
            <div className="bg-gradient-to-br from-white via-emerald-50/50 to-teal-50/50 p-8 rounded-3xl shadow-xl ring-2 ring-emerald-100 hover:shadow-2xl transition-all duration-500 group">
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-bold mb-6 shadow-lg">
                🏠 No Seu Próprio Servidor
              </div>
              <h3 className="text-2xl font-bold mb-4">
                <ColoredText>Versão Self-Hosted</ColoredText>
              </h3>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-center">
                  <span className="text-emerald-600 mr-3 text-lg">🆓</span>
                  Gratuito e open source
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-600 mr-3 text-lg">🔒</span>
                  Controle total sobre seus dados
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-600 mr-3 text-lg">🏗️</span>
                  Deploy na sua infraestrutura ou servidor local
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-600 mr-3 text-lg">🔑</span>
                  Use suas próprias chaves de IA (OpenAI, Gemini, Mistral...)
                </li>
              </ul>
              <Link
                href="/self-hosted"
                className="block w-full text-center px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110"
              >
                Começar com Docker 🐳
              </Link>
            </div>

            {/* Cloud Version */}
            <div className="bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/50 p-8 rounded-3xl shadow-xl ring-2 ring-blue-100 hover:shadow-2xl transition-all duration-500 group relative">
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-bold mb-6 shadow-lg">
                ☁️ Hospedado para Você
              </div>
              <h3 className="text-2xl font-bold mb-4">
                <ColoredText>Versão Cloud</ColoredText>
              </h3>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3 text-lg">🎯</span>
                  Sem preocupação com servidores ou manutenção
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3 text-lg">🤖</span>
                  IA e armazenamento inclusos
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3 text-lg">💳</span>
                  Planos anuais sem taxas escondidas
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3 text-lg">🚀</span>
                  Atualizações e novas funcionalidades automáticas
                </li>
              </ul>
              <button
                type="button"
                disabled
                className="block w-full text-center px-6 py-4 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-700 font-bold rounded-full shadow-xl opacity-80 cursor-not-allowed"
              >
                Em breve
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="py-20 px-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 mt-28 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-5 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full opacity-5 blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Em desenvolvimento
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto font-medium">
              Estamos construindo funcionalidades específicas para o MEI brasileiro. Veja o que vem por aí.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-white via-emerald-50/50 to-teal-50/50 p-8 rounded-3xl shadow-xl ring-2 ring-emerald-100 hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🤖</span>
                <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                  Relatório DAS e IRPF
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-emerald-600 mr-3 text-lg">🔮</span>
                  Resumo mensal de receitas e despesas do MEI
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-600 mr-3 text-lg">🔮</span>
                  Alertas de vencimento do DAS
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-600 mr-3 text-lg">🔮</span>
                  Sugestões de otimização fiscal
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/50 p-8 rounded-3xl shadow-xl ring-2 ring-blue-100 hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📊</span>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                  Relatórios Inteligentes
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3 text-lg">📈</span>
                  Relatórios mensais e trimestrais automáticos
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3 text-lg">📈</span>
                  Lembretes de obrigações fiscais
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3 text-lg">📈</span>
                  Análise anual de receitas e despesas
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white via-teal-50/50 to-cyan-50/50 p-8 rounded-3xl shadow-xl ring-2 ring-teal-100 hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📥</span>
                <h3 className="text-xl font-bold bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent">
                  Conciliação Bancária
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3 text-lg">💳</span>
                  Análise automática de extrato bancário
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3 text-lg">💳</span>
                  Verificação automática de completude dos dados
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3 text-lg">💳</span>
                  Rastreamento de faturas em aberto
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white via-orange-50/50 to-amber-50/50 p-8 rounded-3xl shadow-xl ring-2 ring-orange-100 hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🧩</span>
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent">
                  Presets para o Brasil
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-orange-600 mr-3 text-lg">🇧🇷</span>
                  Categorias pré-configuradas para MEI, ME e EPP
                </li>
                <li className="flex items-center">
                  <span className="text-orange-600 mr-3 text-lg">🇧🇷</span>
                  Relatórios no formato exigido pela Receita Federal
                </li>
                <li className="flex items-center">
                  <span className="text-orange-600 mr-3 text-lg">🇧🇷</span>
                  Integração com nota fiscal eletrônica (NF-e)
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-8 rounded-2xl shadow-sm ring-1 ring-emerald-100">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-semibold mb-4">Fique por dentro</h3>
              <p className="text-gray-600 mb-6">
                Estamos trabalhando duro para tornar o MeiControl a melhor ferramenta financeira para MEI do Brasil.
                Entre em contato para saber mais ou dar sugestões.
              </p>
              <Link
                href={`mailto:${config.app.supportEmail}`}
                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-medium rounded-full hover:opacity-90 transition-all shadow-lg"
              >
                Falar com a gente
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-8 bg-gradient-to-r from-emerald-50 to-blue-50 border-t border-emerald-100">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-600 mb-6">
          Feito com ❤️ para o empreendedor brasileiro
        </div>
        <section className="py-4 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href={`mailto:${config.app.supportEmail}`}
                className="text-sm text-gray-600 hover:text-emerald-600 font-medium transition-colors"
              >
                Contato
              </Link>
              <Link
                href="/docs/terms"
                className="text-sm text-gray-600 hover:text-emerald-600 font-medium transition-colors"
              >
                Termos de Uso
              </Link>
              <Link
                href="/docs/privacy_policy"
                className="text-sm text-gray-600 hover:text-emerald-600 font-medium transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link href="/docs/ai" className="text-sm text-gray-600 hover:text-emerald-600 font-medium transition-colors">
                Uso de IA
              </Link>
              <Link
                href="/docs/cookie"
                className="text-sm text-gray-600 hover:text-emerald-600 font-medium transition-colors"
              >
                Política de Cookies
              </Link>
            </div>
          </div>
        </section>
      </footer>
    </div>
  )
}
