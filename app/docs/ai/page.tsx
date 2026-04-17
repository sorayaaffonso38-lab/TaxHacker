import config from "@/lib/config"

export default async function AI() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Divulgação de Uso de IA</h1>

      <p className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6">
        <strong className="text-slate-700">Data de vigência</strong>: 17 de abril de 2025
        <br />
        <strong className="text-slate-700">E-mail de contato</strong>:{" "}
        <a href={`mailto:${config.app.supportEmail}`} className="text-blue-600 hover:text-blue-800">
          {config.app.supportEmail}
        </a>
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        No MeiControl, usamos inteligência artificial (&quot;IA&quot;) para alimentar as funcionalidades principais da
        nossa plataforma. Este documento explica como e por que usamos tecnologias de IA, quais dados são processados e
        como isso pode afetá-lo como usuário.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Finalidade da IA no MeiControl</h2>
      <p className="text-gray-700 leading-relaxed mb-3">A IA é essencial para a experiência do MeiControl. Ela é usada para:</p>
      <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
        <li>Reconhecimento ótico de caracteres (OCR) em notas fiscais e recibos digitalizados</li>
        <li>Categorização e marcação automática de transações financeiras</li>
        <li>Resumo de despesas e descrições de fornecedores</li>
        <li>Preenchimento automático inteligente de campos em formulários</li>
        <li>Fluxos de trabalho personalizados com prompts customizados</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-6">
        Todo conteúdo gerado por IA é visível diretamente na interface do usuário e pode ser aplicado às suas
        transações, projetos e relatórios.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Provedores e Modelos de IA</h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        Nossa versão em nuvem usa modelos fornecidos pela <strong>OpenAI</strong> e <strong>Google</strong>, incluindo:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
        <li>
          <strong>gpt-4o-mini</strong> (OpenAI)
        </li>
        <li>
          <strong>gemini-2.5-flash</strong> (Google)
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-6">
        Na <strong>versão self-hosted</strong>, os usuários podem conectar seus próprios modelos de linguagem ou
        backends de IA. Não monitoramos nem nos responsabilizamos por esses setups.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Dados Enviados para Processamento por IA</h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        Para entregar funcionalidades com IA, enviamos dados selecionados do usuário às APIs de IA, incluindo:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
        <li>Documentos enviados (ex: recibos, notas fiscais)</li>
        <li>Metadados de transações e campos preenchidos pelo usuário</li>
        <li>Contexto histórico de transações anteriores (quando necessário para análise)</li>
      </ul>
      <p className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-4">
        <strong className="text-amber-600">⚠️ Atenção:</strong> Esses dados <strong>não são anonimizados</strong> antes
        da transmissão. Ao usar o MeiControl, você reconhece e consente com essa transferência.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Envolvimento Humano</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Não revisamos manualmente o conteúdo gerado por IA. Não há atualmente mecanismo de revisão humana, sinalização
        de erros ou correções.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        Os usuários são os únicos responsáveis por verificar a precisão dos resultados processados por IA antes de
        usá-los para fins financeiros ou de declaração.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Dependência Central da IA</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        O processamento por IA é um componente fundamental do MeiControl e não pode ser desabilitado. Se você não
        consente com o processamento dos seus dados via IA, não deve usar a plataforma.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Riscos e Limitações</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Os resultados gerados por IA são probabilísticos e podem conter erros, omissões ou interpretações incorretas.
        Não fazemos <strong>nenhuma garantia de precisão</strong>, completude ou adequação para fins fiscais, legais ou
        financeiros.
      </p>
      <p className="bg-red-50 p-4 rounded-lg border border-red-200 mb-6">
        <strong className="text-red-600">⚠️ Importante:</strong> O MeiControl <strong>não substitui</strong> um
        contador, assessor fiscal ou advogado certificado. Use por sua conta e risco.
      </p>
    </div>
  )
}
