import config from "@/lib/config"

export default async function PrivacyPolicy() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2 className="text-3xl font-bold mb-6 text-slate-900 border-b pb-2">
        <strong>Política de Privacidade</strong>
      </h2>

      <p className="text-slate-700 mb-6 leading-relaxed bg-yellow-50 p-3 border-l-4 border-yellow-400">
        <strong className="text-slate-800">Resumo:</strong> Se você se preocupa muito com a privacidade dos seus dados,
        use nossa versão self-hosted. Nenhuma nuvem é 100% segura. Use a plataforma por sua conta e risco.
      </p>

      <p className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6">
        <strong className="text-slate-700">Data de vigência</strong>: 17 de abril de 2025
        <br />
        <strong className="text-slate-700">E-mail de contato</strong>:{" "}
        <a href={`mailto:${config.app.supportEmail}`} className="text-blue-600 hover:text-blue-800">
          {config.app.supportEmail}
        </a>
      </p>

      <p className="text-slate-700 mb-6 leading-relaxed">
        O MeiControl (&quot;nós&quot;, &quot;nosso&quot;) está comprometido com a proteção da sua privacidade. Esta
        Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais ao usar
        nossos serviços.
      </p>

      <hr className="my-8 border-slate-200" />

      <h3 className="text-2xl font-semibold text-slate-800 mb-4">
        1. <strong>Dados que Coletamos</strong>
      </h3>
      <p className="text-slate-700 mb-3">Coletamos os seguintes tipos de dados quando você usa o MeiControl:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li>
          <strong className="text-slate-800">Dados da Conta</strong>: Endereço de e-mail, nome de exibição, imagem de
          avatar opcional. Nenhuma senha é armazenada.
        </li>
        <li>
          <strong className="text-slate-800">Dados de Comunicação</strong>: E-mails que enviamos para verificação,
          atualizações ou newsletters.
        </li>
        <li>
          <strong className="text-slate-800">Arquivos Enviados</strong>: Notas fiscais, recibos e outros arquivos que
          você envia, que podem conter informações pessoais ou financeiras sensíveis.
        </li>
        <li>
          <strong className="text-slate-800">Metadados de Sessão</strong>: Endereço IP, tipo de navegador e timestamps
          para segurança da sessão.
        </li>
        <li>
          <strong className="text-slate-800">Dados de Uso do Serviço</strong>: Metadados relacionados à sua atividade
          na plataforma (ex: número de arquivos enviados, uso de tokens de IA).
        </li>
      </ul>

      <hr className="my-8 border-slate-200" />

      <h3 className="text-2xl font-semibold text-slate-800 mb-4">
        2. <strong>Como Usamos seus Dados</strong>
      </h3>
      <p className="text-slate-700 mb-3">Usamos seus dados para:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li>Criar e gerenciar sua conta no MeiControl</li>
        <li>Armazenar e analisar seus arquivos enviados</li>
        <li>Melhorar sua organização financeira com insights baseados em IA</li>
        <li>Comunicar sobre sua conta e atualizações do serviço</li>
        <li>Cumprir obrigações legais</li>
      </ul>

      <hr className="my-8 border-slate-200" />

      <h3 className="text-2xl font-semibold text-slate-800 mb-4">
        3. <strong>Processamento por IA</strong>
      </h3>
      <p className="text-slate-700 mb-3">
        Usamos serviços externos de IA, como <strong className="text-slate-800">OpenAI</strong> e{" "}
        <strong className="text-slate-800">Google Gemini</strong>, para:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
        <li>Extrair e interpretar informações de notas fiscais via OCR</li>
        <li>Analisar dados financeiros para melhores insights ao usuário</li>
      </ul>

      <p className="text-slate-700 mb-6 leading-relaxed">
        Ao usar o MeiControl, você consente com a transferência de dados relevantes para esses provedores terceiros com
        o objetivo de processamento.
      </p>

      <hr className="my-8 border-slate-200" />

      <h3 className="text-2xl font-semibold text-slate-800 mb-4">
        4. <strong>Cookies e Rastreamento</strong>
      </h3>
      <p className="text-slate-700 mb-6 leading-relaxed">
        O MeiControl <strong className="text-slate-800">não usa cookies de rastreamento</strong> nem análises de
        terceiros. Coletamos apenas logs de acesso agregados e estatísticas de uso para desempenho e segurança da
        infraestrutura.
      </p>

      <hr className="my-8 border-slate-200" />

      <h3 className="text-2xl font-semibold text-slate-800 mb-4">
        5. <strong>Armazenamento e Segurança dos Dados</strong>
      </h3>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
        <li>Os dados são armazenados em servidores seguros.</li>
        <li>Arquivos e dados pessoais são armazenados em forma não criptografada.</li>
        <li>O acesso a dados pessoais é limitado a membros autorizados da equipe para fins de suporte ou depuração.</li>
      </ul>

      <p className="text-slate-700 mb-6 leading-relaxed bg-yellow-50 p-3 border-l-4 border-yellow-400">
        Embora nos esforcemos para manter salvaguardas razoáveis, nenhum sistema é completamente seguro. Use a
        plataforma por sua conta e risco.
      </p>

      <hr className="my-8 border-slate-200" />

      <h3 className="text-2xl font-semibold text-slate-800 mb-4">
        6. <strong>Base Legal para Processamento</strong>
      </h3>
      <p className="text-slate-700 mb-3">Processamos dados pessoais com base em:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
        <li>
          <strong className="text-slate-800">Seu consentimento</strong>, que você concede ao criar uma conta ou enviar
          dados
        </li>
        <li>
          <strong className="text-slate-800">Nossas obrigações contratuais</strong> de fornecer os serviços contratados
        </li>
      </ul>

      <p className="text-slate-700 mb-6 leading-relaxed">
        Você pode retirar o consentimento a qualquer momento excluindo sua conta ou nos contatando diretamente.
      </p>

      <hr className="my-8 border-slate-200" />

      <h3 className="text-2xl font-semibold text-slate-800 mb-4">
        7. <strong>Retenção de Dados</strong>
      </h3>
      <p className="text-slate-700 mb-3">Retemos seus dados:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
        <li>Enquanto sua conta estiver ativa</li>
        <li>Até você solicitar a exclusão</li>
      </ul>

      <hr className="my-8 border-slate-200" />

      <h3 className="text-2xl font-semibold text-slate-800 mb-4">
        8. <strong>Seus Direitos (LGPD)</strong>
      </h3>
      <p className="text-slate-700 mb-3">Como usuário, você tem o direito de:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
        <li>Acessar e revisar seus dados pessoais</li>
        <li>Corrigir ou atualizar informações imprecisas</li>
        <li>Baixar um backup completo dos seus dados</li>
        <li>Solicitar a exclusão permanente da sua conta e dados associados</li>
        <li>Opor-se a certas formas de processamento</li>
      </ul>

      <p className="text-slate-700 mb-6 leading-relaxed">
        Para exercer seus direitos, entre em contato em{" "}
        <a href={`mailto:${config.app.supportEmail}`} className="text-blue-600 hover:text-blue-800">
          {config.app.supportEmail}
        </a>
        .
      </p>

      <hr className="my-8 border-slate-200" />

      <h3 className="text-2xl font-semibold text-slate-800 mb-4">
        9. <strong>Privacidade de Menores</strong>
      </h3>
      <p className="text-slate-700 mb-6 leading-relaxed">
        O MeiControl <strong className="text-slate-800">não é destinado a menores de 18 anos</strong>. Não coletamos
        nem armazenamos dados de menores de forma intencional.
      </p>

      <hr className="my-8 border-slate-200" />

      <h3 className="text-2xl font-semibold text-slate-800 mb-4">
        10. <strong>Alterações nesta Política</strong>
      </h3>
      <p className="text-slate-700 mb-6 leading-relaxed">
        Podemos atualizar esta Política de Privacidade periodicamente. Quaisquer alterações serão publicadas nesta
        página com a &quot;Data de vigência&quot; atualizada.
      </p>
    </div>
  )
}
