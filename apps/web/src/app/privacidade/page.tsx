import type { Metadata } from "next";

import { LegalPage } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Política de Privacidade — CITi",
  description:
    "Como o CITi coleta, usa e protege os dados pessoais enviados pelo site, em conformidade com a LGPD.",
  robots: { index: true, follow: true },
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="pt-4 text-xl font-bold text-white">{children}</h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="pt-2 text-lg font-semibold text-white">{children}</h3>
);

const Mail = () => (
  <a
    href="mailto:contato@citi.org.br"
    className="text-citi-green underline underline-offset-2 hover:text-white"
  >
    contato@citi.org.br
  </a>
);

export default function PrivacidadePage() {
  return (
    <LegalPage title="Políticas de Privacidade" updatedAt="21 de julho de 2026">
      <H2>1. Disposições iniciais</H2>
      <p>
        1.1. A sua privacidade é importante para nós. É política do CITi
        respeitar a sua privacidade em relação a qualquer informação que possamos
        coletar no site.
      </p>
      <p>
        1.2. Solicitamos informações pessoais apenas quando realmente precisamos
        delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais,
        com o seu conhecimento e consentimento.
      </p>
      <p>1.3. Também informamos por que estamos coletando e como serão usadas.</p>
      <p>
        1.4. Apenas retemos as informações necessárias para controle cadastral e
        para manter o histórico das reservas que são feitas para fornecer o
        serviço solicitado.
      </p>
      <p>
        1.5. Quando armazenamos dados, os protegemos dentro de meios
        comercialmente aceitáveis para evitar perdas e roubos, bem como acesso,
        divulgação, cópia, uso ou modificação não autorizados.
      </p>
      <p>
        1.6. Não compartilhamos informações de identificação pessoal
        publicamente ou com terceiros, exceto quando exigido por lei.
      </p>
      <p>
        1.7. O nosso site pode ou não ter links para sites e/ou aplicativos
        externos que não são operados por nós. Esteja ciente de que não temos
        controle sobre o conteúdo e práticas desses sites e não podemos aceitar
        responsabilidade por suas respectivas políticas de privacidade.
      </p>
      <p>
        1.8. Você é livre para recusar a nossa solicitação de informações
        pessoais, entendendo que talvez não possamos fornecer alguns dos serviços
        desejados.
      </p>
      <p>
        1.9. O uso continuado de nosso site será considerado como aceitação de
        nossas práticas em torno de privacidade e informações pessoais. Se você
        tiver alguma dúvida sobre como lidamos com dados do usuário e informações
        pessoais, entre em contato conosco por meio de <Mail />.
      </p>

      <H2>2. Definições</H2>
      <p>2.1. Para os fins desta Política de Privacidade, consideram-se:</p>
      <p>
        2.1.1. Endereço de Protocolo de Internet (Endereço IP): o código
        atribuído a um Terminal de uma rede para permitir sua identificação,
        definido segundo parâmetros internacionais;
      </p>
      <p>
        2.1.2. Internet: o sistema constituído do conjunto de protocolos lógicos,
        estruturado em escala mundial para uso público e irrestrito, com a
        finalidade de possibilitar a comunicação de dados entre terminais por meio
        de diferentes redes;
      </p>
      <p>
        2.1.3. Sites: portal do citi.org.br por meio do qual o Usuário e
        Estabelecimento acessam os serviços e conteúdos disponibilizados pelo
        site;
      </p>
      <p>
        2.1.4. Terminais: smartphones, tablets e quaisquer outros dispositivos
        que se conectam a Internet e são compatíveis com o site;
      </p>
      <p>
        2.1.5. Usuários: Qualquer pessoa que desejar acessar o site e suas
        ferramentas.
      </p>
      <p>
        2.2. Esta Política de Privacidade deverá ser regida e interpretada de
        acordo com os seguintes princípios:
      </p>
      <p>
        2.2.1. Os cabeçalhos e títulos servem apenas para conveniência de
        referência e não limitarão ou afetarão o significado das cláusulas,
        parágrafos ou itens aos quais se aplicam;
      </p>
      <p>
        2.2.2. Os termos “inclusive”, “incluindo” e outros termos semelhantes
        serão interpretados como se estivessem acompanhados da frase “a título
        meramente exemplificativo” e “sem limitação”;
      </p>
      <p>
        2.2.3. Sempre que exigido pelo contexto, as definições contidas nesta
        Política de Privacidade serão aplicadas tanto no singular quanto no plural
        e o gênero masculino incluirá o feminino e vice-versa, sem alteração de
        significado;
      </p>
      <p>
        2.2.4. Referências a qualquer documento ou outros instrumentos incluem
        todas as suas alterações, substituições e consolidações e respectivas
        complementações, salvo se expressamente disposto de forma diferente nesta
        Política de Privacidade.
      </p>

      <H2>3. Objeto</H2>
      <p>
        3.1. Esta Política de Privacidade apresenta as condições gerais
        aplicáveis ao tratamento de dados referente ao uso dos serviços oferecidos
        pela citi.org.br por meio do seu site.
      </p>

      <H2>4. Cookies</H2>
      <H3>4.1. O que são cookies?</H3>
      <p>
        Como é prática comum em quase todos os sites profissionais, este site usa
        cookies, que são pequenos arquivos baixados no seu terminal, para melhorar
        sua experiência. Esta página descreve quais informações eles coletam, como
        as usamos e por que às vezes precisamos armazenar esses cookies. Também
        compartilharemos como você pode impedir que esses cookies sejam
        armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar' certos
        elementos da funcionalidade do site.
      </p>
      <H3>4.2. Como usamos os cookies?</H3>
      <p>
        Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na
        maioria dos casos, não existem opções padrão do setor para desativar os
        cookies sem desativar completamente a funcionalidade e os recursos que eles
        adicionam a este site. É recomendável que você deixe todos os cookies se
        não tiver certeza se precisa ou não deles, caso sejam usados para fornecer
        um serviço que você usa.
      </p>
      <H3>4.3. Desativar cookies:</H3>
      <p>
        Você pode impedir a configuração de cookies ajustando as configurações do
        seu navegador (consulte a Ajuda do navegador para saber como fazer isso).
        Esteja ciente de que a desativação de cookies afetará a funcionalidade
        deste e de muitos outros sites que você visita. A desativação de cookies
        geralmente resultará na desativação de determinadas funcionalidades e
        recursos deste site. Portanto, é recomendável que você não desative os
        cookies.
      </p>
      <H3>4.4. Cookies que definimos:</H3>
      <p>4.4.1. Cookies relacionados à conta.</p>
      <p>
        4.4.1.1. Se você criar uma conta conosco, usaremos cookies para o
        gerenciamento do processo de inscrição e administração geral. Esses
        cookies geralmente serão excluídos quando você sair do sistema, porém, em
        alguns casos, eles poderão permanecer posteriormente para lembrar as
        preferências do seu site ao sair.
      </p>
      <p>4.4.2. Cookies relacionados ao login.</p>
      <p>
        4.4.2.1. Utilizamos cookies quando você está logado, para que possamos
        lembrar dessa ação. Isso evita que você precise fazer login sempre que
        visitar uma nova página. Esses cookies são normalmente removidos ou limpos
        quando você efetua logout para garantir que você possa acessar apenas a
        recursos e áreas restritas ao efetuar login.
      </p>

      <H2>5. Responsabilidades</H2>
      <p>
        5.1. O Usuário não poderá praticar as seguintes ações com relação ao
        site, no todo ou em parte, sem prejuízo de outras que sejam consideradas
        ilegais, contrariem a ordem pública ou atentem contra a moral e os bons
        costumes:
      </p>
      <p>
        5.1.1. Praticar quaisquer atos ilícitos e/ou violação da legislação
        vigente, inclusive das disposições da Lei 9.613/98 e da Lei 12.846/13;
      </p>
      <p>
        5.1.2. Utilizar o site e/ou qualquer conteúdo dele constante, no todo ou
        em parte, sob qualquer meio ou forma, com propósito diverso daquele a que
        este se destina e de forma diversa da prevista neste Termo, inclusive
        divulgando, a qualquer título, a terceiros que não tenham ou não devam ter
        acesso ao site;
      </p>
      <p>
        5.1.3. Apagar, deturpar, corromper, alterar, editar, adaptar, transmitir
        ou de qualquer forma modificar, sob qualquer meio ou forma, no todo ou em
        parte, o site e/ou qualquer conteúdo dele constante;
      </p>
      <p>
        5.1.4. Fazer publicidade ou marketing associando sua imagem ao
        citi.org.br, ou a qualquer empresa afiliada, controlada, coligada ou
        pertencente ao seu grupo econômico. Para qualquer divulgação dos dados
        contidos neste site, bem como de suas marcas, recomendamos o contato via
        e-mail com <Mail />;
      </p>
      <p>
        5.1.5. Carregar, enviar e/ou transmitir qualquer conteúdo de cunho
        erótico, pornográfico, obsceno, difamatório ou calunioso ou que façam
        apologia ao crime, uso de drogas, consumo de bebidas alcoólicas ou de
        produtos fumígenos, violência física ou moral;
      </p>
      <p>
        5.1.6. Carregar, enviar e/ou transmitir qualquer conteúdo que promova ou
        incite o preconceito (inclusive de origem, raça, sexo, cor, orientação
        sexual e idade) ou qualquer forma de discriminação, bem como o ódio ou
        atividades ilegais;
      </p>
      <p>
        5.1.7. Ameaçar, coagir, ou causar constrangimento físico ou moral aos
        demais Usuários;
      </p>
      <p>
        5.1.8. Realizar atos que causem ou propiciem a contaminação ou
        prejudiquem quaisquer equipamentos do citi.org.br, de suas empresas e/ou
        de terceiros, inclusive por meio de vírus, trojans, malware, worm, bot,
        backdoor, spyware, rootkit, ou por quaisquer outros dispositivos que venham
        a ser criados;
      </p>
      <p>
        5.1.9. Praticar quaisquer atos em relação ao site, direta ou
        indiretamente, no todo ou em parte, que possam causar prejuízo ao
        DESENVOLVEDOR, a qualquer Usuário e/ou a quaisquer terceiros;
      </p>
      <p>
        5.1.10. Usar qualquer nome empresarial, marca, nome de domínio, slogan ou
        expressão de propaganda ou qualquer sinal distintivo ou bem de propriedade
        intelectual de titularidade do DESENVOLVEDOR, ou de qualquer empresa
        afiliada, controlada, coligada ou pertencente ao seu grupo econômico.
      </p>
      <p>5.2. O Usuário é exclusivamente responsável:</p>
      <p>
        5.2.1. Por todos e quaisquer atos ou omissões por ele realizados no
        ambiente do site;
      </p>
      <p>
        5.2.2. Pela reparação de todos e quaisquer danos, diretos ou indiretos,
        que sejam causados ao DESENVOLVEDOR, a qualquer outro Usuário, ou, ainda, a
        qualquer terceiro, inclusive em virtude do descumprimento do disposto neste
        Termo. Sem prejuízo de outras medidas, o DESENVOLVEDOR poderá, por si ou
        por terceiros, a qualquer tempo, a seu exclusivo critério, sem necessidade
        de qualquer aviso ou notificação prévia, suspender o acesso ao site de
        qualquer Usuário, a qualquer tempo, caso este descumpra qualquer disposição
        deste Termo e demais políticas do site ou da legislação vigente aplicável.
      </p>
      <p>5.3. Em nenhuma hipótese, o DESENVOLVEDOR será responsável:</p>
      <p>
        5.3.1. Pelo pagamento de custos ou danos, inclusive danos diretos,
        indiretos, específicos, acidentais ou emergentes, decorrentes do acesso ou
        uso, impossibilidade de acesso ou uso deste site ou de alguma de suas
        funções ou partes, inclusive com o fim de consultar ou baixar informações,
        dados, textos, imagens ou outros materiais acessíveis por meio deste site;
      </p>
      <p>
        5.3.2. Por qualquer ato ou omissão realizado e/ou dano causado pelo
        Usuário neste site;
      </p>
      <p>
        5.3.3. Pela instalação no equipamento do Usuário ou de terceiros, de
        vírus, trojans, malware, worm, bot, backdoor, spyware, rootkit, ou de
        quaisquer outros dispositivos que venham a ser criados, em decorrência da
        navegação na Internet pelo Usuário;
      </p>
      <p>
        5.3.4. Pelo uso indevido por qualquer Usuário ou terceiros do site, no
        todo ou em parte, por qualquer meio ou forma, incluindo, mas não se
        limitando à reprodução e/ou divulgação em quaisquer meios;
      </p>
      <p>5.3.5. Pela suspensão, interrupção ou remoção do site;</p>
      <p>
        5.3.6. Por qualquer dano direto, indireto, acidental, excepcional ou
        resultante do uso ou inaptidão do desfrute dos seus serviços, ou pelo custo
        da aquisição de serviços substitutos.
      </p>
      <p>
        5.4. O Usuário se declara ciente que o citi.org.br não controla os
        conteúdos ou produtos transmitidos, difundidos ou disponibilizados a
        terceiros pelo estabelecimento no uso das funcionalidades, bem como que o
        DESENVOLVEDOR não é o proprietário dos produtos ou responsável pela
        qualidade dos produtos e serviços ofertados, e que não intervém na entrega
        dos produtos ou na prestação dos serviços. Fica certo, desde já, que o
        estabelecimento é o único e exclusivo responsável pelo conteúdo da oferta
        disponibilizada, respondendo integralmente pelos eventuais danos que tenham
        sido causados, inclusive por ação e/ou omissão.
      </p>
      <p>
        5.5. Fica certo desde já que o DESENVOLVEDOR não será responsabilizado
        pelo não funcionamento do site ou decorrente de falha ou interrupção de
        qualquer serviço de telecomunicação, conexão à internet, provedor de acesso
        à internet ou de qualquer outro provedor de comunicações, caso fortuito,
        força maior ou de qualquer outra falha ou problema não atribuíveis o
        DESENVOLVEDOR.
      </p>
      <p>
        5.6. A responsabilidade de fornecimento da promoção, disponibilidade e
        prestação do serviço é do Estabelecimento, sendo certo que o citi.org.br
        apenas funciona como o canal digital de divulgação (publicidade).
      </p>

      <H2>6. Dados coletados</H2>
      <H3>6.1. Tipos de dados coletados:</H3>
      <p>
        6.1.1. Dados de identificação do Usuário para realização de cadastro,
        conforme o seguinte:
      </p>
      <p>
        I. A utilização, pelo Usuário, de determinadas funcionalidades do site
        dependerá de cadastro, sendo que, nestes casos, os seguintes dados do
        Usuário serão coletados e armazenados.
      </p>
      <p>6.1.2. Dados informados no formulário de contato, conforme o seguinte:</p>
      <p>
        I. Os dados eventualmente informados pelo Usuário que utilizar o
        formulário de contato disponibilizado no site, incluindo o teor da mensagem
        enviada, serão coletados e armazenados.
      </p>
      <p>6.1.3. Registros de acesso:</p>
      <p>
        I. Em atendimento às disposições do art. 15, caput e parágrafos, da Lei
        Federal n° 12.965/2014 (Marco Civil da Internet), os registros de acesso do
        Usuário serão coletados e armazenados por, pelo menos, 6 (seis) meses.
      </p>
      <p>
        6.1.4. O tratamento dos dados pessoais encontra fundamento jurídico
        conforme o seguinte:
      </p>
      <p>
        Ao utilizar os serviços do site, o Usuário está consentindo com a presente
        Política de Privacidade;
      </p>
      <p>
        O Usuário tem o direito de retirar seu consentimento a qualquer momento,
        não comprometendo a licitude do tratamento de seus dados pessoais antes da
        retirada. A retirada do consentimento poderá ser feita pelo e-mail ou por
        correio enviado ao seguinte endereço: <Mail />;
      </p>
      <p>
        O consentimento dos relativamente ou absolutamente incapazes,
        especialmente de crianças menores de 16 (dezesseis) anos, apenas poderá ser
        feito, respectivamente, se devidamente assistidos ou representados.
      </p>
      <p>
        6.1.5. O tratamento de dados pessoais sem o consentimento do Usuário
        apenas será realizado em razão de interesse legítimo ou para as hipóteses
        previstas em lei, ou seja, dentre outras, as seguintes:
      </p>
      <p>Para o cumprimento de obrigação legal ou regulatória pelo controlador;</p>
      <p>
        Para a realização de estudos por órgão de pesquisa, garantida, sempre que
        possível, a anonimização dos dados pessoais;
      </p>
      <p>
        Quando necessário para a execução de contrato ou de procedimentos
        preliminares relacionados a contrato do qual seja parte o Usuário, a pedido
        do titular dos dados;
      </p>
      <p>
        Para o exercício regular de direitos em processo judicial, administrativo
        ou arbitral, esse último nos termos da Lei n 9.307, de 23 de setembro de
        1996 (Lei de Arbitragem);
      </p>
      <p>
        Para a proteção da vida ou da incolumidade física do titular dos dados ou
        de terceiro;
      </p>
      <p>
        Quando necessário para atender aos interesses legítimos do controlador ou
        de terceiro, exceto no caso de prevalecerem direitos e liberdades
        fundamentais do titular dos dados que exijam a proteção dos dados pessoais,
        conforme a lei federal n° 13.709/2018 (Lei Geral de Proteção de Dados).
      </p>
      <p>
        6.1.6. Os dados pessoais do Usuário serão mantidos apenas pelo período
        necessário ao atendimento das finalidades desta Política de Privacidade,
        sendo eliminados após o término do tratamento, ressalvadas as hipóteses de
        conservação previstas na Lei nº 13.709/2018 (Lei Geral de Proteção de Dados
        Pessoais).
      </p>
      <p>6.1.7. Destinatários e transferência dos dados pessoais:</p>
      <p>
        A transferência apenas poderá ser feita para outro país caso o país ou
        território em questão ou a organização internacional em causa assegurem um
        nível de proteção adequado dos dados do Usuário.
      </p>
      <p>
        6.1.8. Caso não haja nível de proteção adequado, o site se compromete a
        garantir a proteção dos seus dados de acordo com as regras mais rigorosas,
        por meio de cláusulas contratuais específicas para determinada
        transferência, cláusulas-padrão contratuais, normas corporativas globais ou
        selos, certificados e códigos de conduta regularmente emitidos.
      </p>
      <p>
        6.1.9. O Usuário poderá exercer, nos termos da Lei nº 13.709/2018 (Lei
        Geral de Proteção de Dados Pessoais), os direitos relativos aos seus dados
        pessoais, incluindo a confirmação da existência de tratamento, o acesso, a
        correção de dados incompletos, inexatos ou desatualizados, a eliminação dos
        dados pessoais tratados em desconformidade com a legislação aplicável, bem
        como os demais direitos previstos na legislação vigente, mediante
        solicitação encaminhada ao canal de atendimento disponibilizado pelo CITi.
      </p>

      <H2>7. Disposições gerais</H2>
      <p>
        7.1. A presente versão desta Política de Privacidade foi atualizada pela
        última vez em: 21/07/2026.
      </p>
      <p>
        7.2. Ao editor se reserva o direito de modificar, a qualquer momento e sem
        qualquer aviso prévio, o site, as presentes normas, especialmente para
        adaptá-los às evoluções do citi.org.br, seja pela disponibilização de novas
        funcionalidades, seja pela supressão ou modificação daquelas já existentes.
      </p>
      <p>
        7.3. Dessa forma, convida-se o Usuário a consultar periodicamente esta
        página para verificar as atualizações.
      </p>
      <p>
        7.4. Ao utilizar o serviço após eventuais modificações, o Usuário
        demonstra sua concordância com as novas normas. Caso discorde de alguma das
        modificações, deverá pedir, imediatamente, o cancelamento de sua conta e
        apresentar a sua ressalva ao serviço de atendimento, se assim o desejar.
      </p>
      <p>
        7.5. O DESENVOLVEDOR não assume nenhuma responsabilidade por nenhum
        website acessado a partir desta plataforma.
      </p>
      <p>
        7.6. Um link deste site para outro site não constitui, necessariamente,
        uma recomendação, patrocínio, aprovação, propaganda ou oferta.
      </p>
      <p>
        7.7. A tolerância quanto ao eventual descumprimento de quaisquer das
        disposições deste Termo deste site por qualquer Usuário não constituirá
        renúncia ao direito de exigir o cumprimento da obrigação.
      </p>
      <p>
        7.8. O DESENVOLVEDOR poderá, a qualquer tempo, a seu exclusivo critério e
        sem necessidade de qualquer aviso prévio: Tirar o site do ar; Alterar e/ou
        atualizar no todo ou em parte este Termo; Alterar e/ou atualizar as
        políticas comerciais presentes no site.
      </p>
      <p>
        7.9. O DESENVOLVEDOR reserva a si o direito de reexaminar e corrigir os
        termos e condições deste acordo a qualquer momento. Qualquer correção será
        obrigatória e válida imediatamente após a postagem do acordo modificado em
        nosso site. A continuidade do uso do site implica em concordância com
        qualquer alteração nos termos e condições e deverá ser integralmente
        observada pelos Usuários.
      </p>
      <p>
        7.10. Os comunicados, newsletters, avisos de ofertas e mensagens
        publicitárias enviadas por e-mail trarão, obrigatoriamente, opção de
        cancelamento (opt-out) do envio daquele tipo de mensagem por parte do site.
        O cancelamento do envio também pode ser solicitado pelos canais de
        atendimento disponíveis do citi.org.br.
      </p>
      <p>
        7.11. O processo de cancelamento de envio é vinculado ao e-mail do
        USUÁRIO. Portanto, Usuários que possuam mais de um e-mail cadastrado poderão
        continuar a receber os comunicados ou as mensagens publicitárias no e-mail
        que não foi descadastrado.
      </p>
      <p>
        7.12. As marcas registradas, nomes, logotipos e marcas de serviços
        mostrados são legalmente, reconhecidos ou não, do proprietário. Nada contido
        neste site deve ser entendido como uma forma de conceder licença ou direito
        de usar qualquer marca registrada sem a autorização prévia escrita do dono.
        O conteúdo textual apresentado neste site é propriedade de seu respectivo
        autor e não pode ser reproduzido total ou parcialmente sem sua expressa
        permissão escrita.
      </p>
      <p>
        7.13. O Usuário está ciente e concorda com a coleta, armazenamento,
        tratamento, processamento e uso das Informações enviadas e/ou transmitidas
        pelo Usuário nos termos aqui estabelecidos.
      </p>
      <p>
        7.14. O DESENVOLVEDOR poderá, a qualquer momento, alterar as disposições
        constantes neste Termo, se comprometendo a dar a devida publicidade às
        modificações efetivadas mediante a disponibilização de avisos e alertas no
        site.
      </p>
      <p>
        7.15. O citi.org.br poderá divulgar notificações ou mensagens através do
        site para informar os Usuários a respeito de mudanças nos serviços ou no
        Termo de Uso, Navegação, Política, Privacidade e Compartilhamento, ou outros
        assuntos relevantes.
      </p>
      <p>
        7.16. Para a solução das controvérsias decorrentes do presente
        instrumento, será aplicado integralmente o Direito brasileiro.
      </p>
      <p>
        7.17. Os eventuais litígios deverão ser apresentados no foro da comarca em
        que se encontra a sede do editor do site, sendo estabelecida, então, a
        Comarca de Recife, Pernambuco, para a resolução de quaisquer disputas ou
        controvérsias oriundas de quaisquer atos praticados no âmbito do site pelos
        Usuários, inclusive com relação ao descumprimento deste Termo, e/ou demais
        políticas do site.
      </p>
    </LegalPage>
  );
}
