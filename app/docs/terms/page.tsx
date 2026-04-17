import config from "@/lib/config"

export default async function Terms() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1 className="text-3xl font-bold mb-6 text-slate-900 border-b pb-2">Termos de Uso</h1>
      <p className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6">
        <strong className="text-slate-700">Data de vigência:</strong> 17 de abril de 2025
        <br />
        <strong className="text-slate-700">Serviço:</strong> MeiControl
        <br />
        <strong className="text-slate-700">Contato:</strong>{" "}
        <a href={`mailto:${config.app.supportEmail}`} className="text-blue-600 hover:text-blue-800">
          {config.app.supportEmail}
        </a>
      </p>

      <p className="text-slate-700 mb-6 leading-relaxed">
        Estes Termos de Uso (&quot;Termos&quot;) regem o acesso e uso do MeiControl, um analisador automático de notas
        fiscais e gestor de despesas com inteligência artificial. Ao acessar ou usar nossos serviços, você concorda em
        estar vinculado a estes Termos.
      </p>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Descrição do Serviço</h2>
      <p className="text-slate-700 mb-3">O MeiControl oferece:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li>
          Uma <strong className="text-slate-800">plataforma em nuvem</strong> com planos de assinatura
        </li>
        <li>
          Uma <strong className="text-slate-800">versão self-hosted</strong> gratuita sem garantias de suporte
        </li>
      </ul>
      <p className="text-slate-700 mb-6 leading-relaxed">
        Os usuários podem fazer upload de notas fiscais e recibos, analisar transações e gerenciar despesas com
        ferramentas de IA. O serviço é voltado principalmente para MEI, freelancers e pequenas empresas.
      </p>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. Elegibilidade e Uso da Conta</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li>
          Você deve ter pelo menos <strong className="text-slate-800">18 anos</strong> para usar o MeiControl.
        </li>
        <li>Você é responsável por manter a confidencialidade das credenciais de acesso e por todas as atividades realizadas na sua conta.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. Assinaturas e Pagamentos</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li>
          Os planos pagos são gerenciados via <strong className="text-slate-800">Stripe</strong>, e todas as assinaturas{" "}
          <strong className="text-slate-800">renovam automaticamente</strong> salvo cancelamento.
        </li>
        <li>Você pode cancelar sua assinatura ou excluir sua conta a qualquer momento pelo painel.</li>
        <li>
          Oferecemos <strong className="text-slate-800">política de reembolso sem questionamentos</strong>, mas nos
          reservamos o direito de descontar custos de uso de IA e serviços de terceiros já incorridos.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. Responsabilidades do Usuário</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li>
          Você pode fazer upload de qualquer nota ou recibo <strong className="text-slate-800">a seu critério</strong>,
          mas <strong className="text-slate-800">é o único responsável</strong> pelo conteúdo enviado.
        </li>
        <li>
          <strong className="text-slate-800">Material ilegal, fraudulento ou protegido por direitos autorais</strong>{" "}
          sem permissão é estritamente proibido.
        </li>
        <li>
          Você <strong className="text-slate-800">não pode redistribuir ou revender nossos serviços de IA</strong> a
          terceiros sem consentimento por escrito.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. Uso de IA e Integrações de Terceiros</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li>
          O MeiControl usa <strong className="text-slate-800">OpenAI, Google Gemini</strong> e outros provedores de IA
          para processar e analisar documentos.
        </li>
        <li>Ao usar o serviço, você autoriza o processamento dos seus dados por esses provedores.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">6. Propriedade Intelectual</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li>
          Você mantém a <strong className="text-slate-800">propriedade total</strong> do conteúdo enviado e de toda a
          análise resultante.
        </li>
        <li>
          O MeiControl <strong className="text-slate-800">não reivindica nenhum direito</strong> sobre seus dados.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">7. Limitação de Responsabilidade</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li>
          O MeiControl é fornecido <strong className="text-slate-800">&quot;como está&quot;</strong>, sem garantias de
          qualquer tipo.
        </li>
        <li>
          Não garantimos a precisão dos resultados gerados por IA para fins de contabilidade, declaração fiscal ou
          conformidade legal.
        </li>
        <li className="bg-yellow-50 p-3 border-l-4 border-yellow-400">
          <strong className="text-slate-800">⚠️ Importante:</strong> O MeiControl{" "}
          <strong className="text-slate-800">não substitui</strong> um contador ou assessor fiscal profissional. Use o
          serviço <strong className="text-slate-800">por sua conta e risco</strong>.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">8. Modificação e Encerramento do Serviço</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li>Reservamo-nos o direito de modificar ou descontinuar o serviço a qualquer momento, com ou sem aviso prévio.</li>
        <li>Podemos suspender ou encerrar sua conta em caso de violação destes Termos.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">9. Lei Aplicável e Resolução de Disputas</h2>
      <p className="text-slate-700 mb-6 leading-relaxed">
        Estes Termos são regidos pelas leis do <strong className="text-slate-800">Brasil</strong>.<br />
        Quaisquer disputas serão resolvidas nos tribunais competentes do Brasil, conforme aplicável.
      </p>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">10. Alterações nestes Termos</h2>
      <p className="text-slate-700 mb-6 leading-relaxed">
        Podemos revisar estes Termos a qualquer momento. Se fizermos alterações relevantes, notificaremos os usuários
        por e-mail ou notificação no app. O uso continuado após as alterações constitui aceite dos novos Termos.
      </p>
    </div>
  )
}
