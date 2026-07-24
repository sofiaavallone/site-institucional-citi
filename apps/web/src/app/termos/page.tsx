import type { Metadata } from "next";

import { LegalPage } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Termos de Uso — CITi",
  description:
    "Termos e condições de uso do site institucional do CITi — Centro Integrado de Tecnologia da Informação.",
  robots: { index: true, follow: true },
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="pt-4 text-xl font-bold text-white">{children}</h2>
);

const List = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-disc space-y-1 pl-6">{children}</ul>
);

export default function TermosPage() {
  return (
    <LegalPage title="Termo de Uso" updatedAt="24 de julho de 2026">

      <H2>1. Aceitação dos termos e condições de uso</H2>
      <p>
        1.1. A aceitação dos Termos de Uso é absolutamente indispensável à
        utilização do site https://citi.org.br/, tanto por pessoas físicas como
        por pessoas jurídicas. Qualquer pessoa física ou jurídica, doravante
        nominada <strong>USUÁRIO</strong>, que pretenda utilizar ou solicitar qualquer Serviço
        pago da plataforma deverá aceitar os termos abaixo. Se você não estiver
        de pleno acordo com qualquer um dos termos ou condições estabelecidas
        nos Termos de Uso, o seu usufruto da plataforma é vedado.
      </p>
      <p>
        1.2. Os Termos e Condições de Uso regulamentam a utilização da
        plataforma, que pertencem <strong>CITi - CENTRO INTEGRADO DE TECNOLOGIA DA
        INFORMAÇÃO EMPRESA JÚNIOR DO CIn/UFPE - CITi</strong>, localizado à Avenida
        Jornalista Aníbal Fernandes, s/n - Cidade Universitária, Recife,
        Pernambuco, CEP: 50740-560, devidamente inscrito no CNPJ sob o nº
        02.047.599/0001-44, doravante denominado <strong>DESENVOLVEDOR</strong>.
      </p>
      <p>
        1.3. A Ferramenta está disponível para aqueles com capacidade civil para
        utilizá-la. Caso o <strong>USUÁRIO</strong> não possua capacidade para acessar a
        plataforma, quando for mencionado <strong>USUÁRIO</strong> neste Termo será então
        entendido também que as declarações tenham sido prestadas por seu
        responsável legal.
      </p>
      <p>
        1.4. Ao <strong>DESENVOLVEDOR</strong> se reserva o direito de modificar a qualquer
        momento a apresentação, configuração e disponibilização da plataforma. O
        mesmo se aplica a estes Termos e Condições de Uso, estabelecidos como
        condição fundamental para a utilização do serviço.
      </p>
      <p>
        1.5. Os Termos de Uso permanecerão em vigor enquanto o <strong>USUÁRIO</strong> utilizar a
        plataforma. Ao <strong>DESENVOLVEDOR</strong> reserva-se o direito de alterar os Termos de
        Uso a qualquer momento. Quaisquer alterações entrarão em vigor após a
        publicação da versão atualizada dos Termos de Uso na plataforma, sendo
        amplamente divulgado para seus <strong>USUÁRIOS</strong>, conforme previsto em lei. Ao
        continuar acessando após ser fornecido um aviso de modificação, você
        concorda em sujeitar-se aos Termos modificados. Caso você não concorde
        com as alterações, deverá cessar todo e qualquer uso da plataforma.
        Recomenda-se que você se atente aos comunicados em redes sociais ou na
        própria plataforma a respeito das atualizações dos Serviços, para que
        esteja ciente de quaisquer modificações.
      </p>

      <H2>2. Contas e registro</H2>
      <p>
        2.1. O acesso ao site é livre e não exige a criação de cadastro, login ou
        qualquer forma de registro prévio pelo visitante. Caso o <strong>USUÁRIO</strong> deseje
        entrar em contato com o CITi, poderá utilizar o formulário de contato
        disponibilizado no https://citi.org.br/. Para o envio da mensagem, serão
        solicitados os seguintes dados:
      </p>
      <List>
        <li>Nome (obrigatório);</li>
        <li>E-mail corporativo (obrigatório);</li>
        <li>Empresa (opcional);</li>
        <li>Telefone (opcional); e</li>
        <li>
          Campo de texto livre destinado à descrição do desafio ou da solicitação
          (opcional).
        </li>
      </List>
      <p>
        2.2. O envio do formulário depende do aceite expresso do tratamento dos
        dados pessoais por meio da caixa de consentimento disponibilizada na
        própria página, vinculada à Política de Privacidade, pela qual o <strong>USUÁRIO</strong>
        declara concordar com o tratamento de seus dados exclusivamente para que
        o CITi possa responder à solicitação encaminhada.
      </p>
      <p>
        2.3. Os dados informados são transmitidos aos servidores do CITi e
        encaminhados à caixa de e-mail institucional por meio de serviço
        especializado de envio transacional contratado junto a terceiro operador,
        sendo utilizados exclusivamente para viabilizar o atendimento e a
        resposta ao contato realizado, não havendo criação de conta de usuário,
        disponibilização de área restrita, utilização para processamento de
        pagamentos ou tratamento para finalidades diversas daquelas informadas.
      </p>
      <p>
        2.4. O <strong>USUÁRIO</strong> poderá, a qualquer momento, exercer os direitos previstos
        na Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018),
        inclusive solicitar informações, correção, atualização ou exclusão de
        seus dados pessoais, mediante contato pelos canais indicados na Política
        de Privacidade.
      </p>
      <p>
        2.5. O <strong>USUÁRIO</strong> declara que os dados pessoais fornecidos por meio do
        formulário de contato são verdadeiros, completos e atualizados,
        responsabilizando-se pela exatidão das informações encaminhadas. O CITi
        utilizará tais informações exclusivamente para atender à solicitação
        realizada pelo <strong>USUÁRIO</strong>, observando as disposições destes Termos de Uso, da
        Política de Privacidade e da legislação aplicável.
      </p>
      <p>
        2.6. O CITi adota medidas técnicas e administrativas razoáveis para
        proteger os dados pessoais tratados por meio do site contra acessos não
        autorizados, perda, alteração, divulgação ou qualquer forma de tratamento
        inadequado ou ilícito. Todavia, considerando a própria natureza da
        internet, nenhuma medida de segurança é capaz de garantir proteção
        absoluta contra incidentes ou acessos indevidos por terceiros. Dessa
        forma, embora o CITi empregue boas práticas de segurança da informação,
        não é possível assegurar a inviolabilidade completa das informações
        transmitidas eletronicamente.
      </p>
      <p>
        2.7. O <strong>USUÁRIO</strong> compromete-se a fornecer apenas informações necessárias ao
        atendimento de sua solicitação e a evitar o envio de dados sensíveis ou de
        terceiros sem a devida autorização, salvo quando estritamente necessário e
        permitido pela legislação aplicável.
      </p>

      <H2>3. Pagamentos e taxas</H2>
      <p>
        3.1. Para acessar a plataforma do https://citi.org.br/, não é realizar
        nenhum tipo de pagamento direto ao <strong>DESENVOLVEDOR</strong>.
      </p>

      <H2>4. Do serviço ofertado pela plataforma</H2>
      <p>
        4.1. O site é a landing page institucional do CITi — Centro Integrado de
        Tecnologia da Informação (empresa júnior/laboratório ligado ao Centro de
        Informática da UFPE — CIn-UFPE). Ele é um site de apresentação
        institucional (não é uma plataforma transacional, não vende produtos
        online, não tem cadastro/login de usuário e não processa pagamentos).
        Seus objetivos são:
      </p>
      <List>
        <li>
          Apresentar o CITi e seus serviços de tecnologia — desenvolvimento de
          software sob medida, projetos de Dados, Inteligência Artificial e
          Machine Learning, focados em resultado de negócio;
        </li>
        <li>
          Divulgar credibilidade e prova social — números institucionais (anos de
          mercado, NPS, projetos, colaboradores), logos de empresas atendidas
          (ex.: Riachuelo, Neoenergia, CAS Tecnologia, Baterias Moura, entre
          outras) e cases de projetos entregues;
        </li>
        <li>
          Explicar a metodologia de trabalho do CITi (Discovery → Construção →
          Parceria contínua);
        </li>
        <li>
          Captar contatos comerciais (leads) de empresas interessadas em conversar
          sobre um projeto/diagnóstico, por meio de um formulário de contato.
        </li>
      </List>
      <p>
        Em resumo: é um site institucional informativo com um formulário de
        contato como única função interativa.
      </p>
      <p>4.2. Funcionamento do site:</p>
      <p>
        I. Tipo de plataforma: trata-se de um site web (acessado pelo navegador),
        em formato de página única (single page) — não há aplicativo móvel nem
        múltiplas páginas de conteúdo. A navegação do menu apenas rola a tela até
        a seção correspondente. Existem apenas duas páginas separadas, ambas de
        conteúdo legal (Termos de Uso e Política de Privacidade).
      </p>
      <p>II. Menu de navegação (topo):</p>
      <List>
        <li>Nossa Metodologia — leva à seção de metodologia;</li>
        <li>Porque o CITi — leva à seção de números/credibilidade;</li>
        <li>Serviços — leva à seção de cases.</li>
      </List>
      <p>III. Seções da página principal, na ordem em que aparecem:</p>
      <List>
        <li>
          Hero (abertura) — mensagem principal do CITi e dois botões de chamada
          para ação: &quot;Solicitar diagnóstico&quot; (leva ao formulário) e
          &quot;Nossos cases&quot;.
        </li>
        <li>Clientes — carrossel com logos de empresas já atendidas.</li>
        <li>
          Nossa Metodologia — explica as 3 etapas de trabalho: (1) Discovery, (2)
          Construção em Data, IA &amp; Software, (3) Parceria contínua.
        </li>
        <li>
          Números / Porque o CITi — dados institucionais de impacto (+30 anos de
          mercado, +90 de NPS, +200 projetos nos últimos 5 anos, +60
          colaboradores).
        </li>
        <li>
          Cases / Serviços — carrossel com exemplos de projetos entregues, cada
          um com um botão &quot;Saiba mais&quot; que abre um link externo
          (apresentações no Canva).
        </li>
        <li>
          Diagnóstico / Contato — formulário de contato, a única funcionalidade
          que coleta dados do usuário.
        </li>
        <li>
          Rodapé — informações institucionais e links para as páginas de Termos de
          Uso e Política de Privacidade.
        </li>
      </List>
      <p>IV. Funcionamento do formulário de contato:</p>
      <List>
        <li>
          Campos coletados: Nome (obrigatório), E-mail corporativo (obrigatório),
          Empresa, Telefone e um campo de texto livre (&quot;Conte brevemente
          sobre o desafio&quot;). Nome e e-mail são obrigatórios; os demais são
          opcionais.
        </li>
        <li>
          O envio exige aceite expresso de uma caixa de consentimento (LGPD), que
          remete à Política de Privacidade: &quot;Concordo que o CITi trate meus
          dados para responder a este contato.&quot;
        </li>
        <li>
          Destino dos dados: ao enviar, os dados são transmitidos ao servidor do
          CITi e encaminhados por e-mail para a caixa institucional
          (https://citi.org.br/), por meio do serviço de envio transacional
          Resend (operador terceiro). O propósito exclusivo é permitir que a
          equipe do CITi responda ao contato comercial — <strong>não há criação de conta nem uso para outras finalidades.</strong>
        </li>
        <li>
          Medidas de segurança implementadas: cabeçalhos de segurança (Helmet),
          limite de requisições (anti-flood/rate limit), campo &quot;honeypot&quot;
          anti-robô, e tratamento (escape) do conteúdo antes do envio. Contato
          institucional exibido no site: Centro de Informática — UFPE, Recife/PE,
          e-mail https://citi.org.br/.
        </li>
      </List>

      <H2>5. Responsabilidade do desenvolvedor</H2>
      <p>
        5.1. O <strong>DESENVOLVEDOR</strong> disponibiliza este site exclusivamente para fins
        institucionais e informativos, bem como para possibilitar o envio de
        mensagens por meio do formulário de contato. O site não constitui
        plataforma de intermediação de negócios, marketplace ou ambiente para
        contratação de produtos ou serviços, não realizando vendas, processamento
        de pagamentos ou qualquer transação entre usuários e terceiros. Dessa
        forma, o <strong>DESENVOLVEDOR</strong> não se responsabiliza por decisões, negociações,
        contratações ou quaisquer relações eventualmente estabelecidas entre o
        visitante e terceiros em decorrência das informações disponibilizadas no
        site, tampouco por atos praticados por terceiros que utilizem
        indevidamente seu conteúdo ou sua identidade.
      </p>
      <p>
        5.2. O <strong>DESENVOLVEDOR</strong> não terá a responsabilidade de confirmar a
        identidade dos <strong>USUÁRIOS</strong>, bem como não terá a responsabilidade de confirmar
        ou verificar as qualificações, o histórico.
      </p>
      <p>
        5.3. O <strong>DESENVOLVEDOR</strong> adota medidas técnicas e administrativas compatíveis
        com as boas práticas de segurança da informação para proteger os dados
        pessoais tratados por meio do site contra acessos não autorizados, perda,
        alteração, divulgação ou qualquer forma de tratamento inadequado ou
        ilícito. Entretanto, em razão das características inerentes ao ambiente da
        internet, não é possível garantir segurança absoluta contra ataques
        cibernéticos, falhas de comunicação ou outros eventos causados por
        terceiros. Assim, o <strong>DESENVOLVEDOR</strong> não poderá ser responsabilizado por
        danos decorrentes de invasões, acessos não autorizados ou outras violações
        praticadas por terceiros que consigam contornar os mecanismos de segurança
        empregados, desde que não decorram de dolo ou culpa comprovada do
        <strong>DESENVOLVEDOR</strong>, nos termos da legislação aplicável.
      </p>

      <H2>6. Responsabilidade do usuário</H2>
      <p>
        6.1. O <strong>DESENVOLVEDOR</strong> não se responsabiliza pelas obrigações tributárias
        que recaiam sobre as atividades dos <strong>USUÁRIOS</strong> da plataforma.
      </p>
      <p>
        6.2. O <strong>USUÁRIO</strong> se compromete a fornecer seus dados pessoais de forma
        verdadeira e precisa, caso deseje entrar em contato com os
        desenvolvedores.
      </p>
      <p>
        6.3. É vedado ao <strong>USUÁRIO</strong> modificar, copiar, distribuir, transmitir, exibir,
        realizar, reproduzir, publicar, disponibilizar, licenciar ou criar obras
        derivadas a partir das informações coletadas no site https://citi.org.br/,
        bem como transferir ou vender tais.
      </p>
      <p>
        6.4. O <strong>USUÁRIO</strong> se compromete a não utilizar linguagem inapropriada e/ou
        abusiva.
      </p>

      <H2>7. Direitos de propriedade intelectual e uso de licença</H2>
      <p>
        7.1. Todos os direitos intelectuais e industriais relacionados à
        plataforma https://citi.org.br/, assim como marca, patente, operações,
        software, domínio, emblemas, logotipos, design de páginas e peças
        publicitárias, estrutura, conteúdos, estabelecimentos, acesso ao campo dos
        <strong>USUÁRIOS</strong> e informações, ferramentas, símbolos e expressões que caracterizem
        os Serviços do https://citi.org.br/ são de inteira propriedade do
        <strong>DESENVOLVEDOR</strong>, estando protegidos pelas normas de proteção à propriedade
        intelectual não sendo concedida nenhuma extensão de uso ao <strong>USUÁRIO</strong>, salvo
        quando houver prévia autorização expressa dos representantes legais da
        empresa.
      </p>
      <p>
        7.2. O <strong>DESENVOLVEDOR</strong> concede ao <strong>USUÁRIO</strong>, de forma pessoal, revogável,
        intransferível e não exclusiva, o direito e a licença para acessar e usar
        os Serviços, contanto que o <strong>USUÁRIO</strong> não copie, modifique, crie trabalho
        derivado, faça engenharia reversa, faça montagem reversa, tente descobrir
        qualquer código fonte, venda, atribua, conceda direito real de garantia ou
        transfira qualquer direito nos Serviços. O <strong>USUÁRIO</strong> concorda em não acessar
        os Serviços de nenhuma outra forma a não ser pelas interfaces fornecidas
        pelo https://citi.org.br/.
      </p>
      <p>
        7.3. A plataforma pode linkar outros sites da rede, o que não significa que
        esses sites sejam de propriedade ou operados pelo site. Não possuindo
        controle sobre esses sites, o <strong>DESENVOLVEDOR</strong> não será responsável pelos
        conteúdos, práticas e serviços ofertados nos mesmos. A presença de links
        para outros sites não implica relação de sociedade, de supervisão, de
        cumplicidade ou solidariedade do <strong>DESENVOLVEDOR</strong> para com esses sites e seus
        conteúdos.
      </p>
      <p>
        7.4. Ao enviar qualquer conteúdo ou informação para a plataforma, incluindo
        textos, tais como comentários através da Ferramenta, fóruns de discussão,
        comunidades, enquetes, testes, seção de dúvidas, fotografias, ilustrações,
        vídeos, arquivos de áudio e outros materiais, o <strong>USUÁRIO</strong> declara autorizar,
        de forma gratuita, não exclusiva, perpétua, global e livre de royalty, o
        uso do material pelo <strong>DESENVOLVEDOR</strong>, por qualquer modalidade e suporte, para
        publicação, reprodução, transmissão, retransmissão, distribuição,
        comunicação ao público, edição, adaptação e outras transformações,
        tradução para qualquer idioma, inclusão em quaisquer outras obras,
        representação, execução, uso por radiodifusão e outros meios de
        comunicação.
      </p>
      <p>
        7.5. Qualquer eventual omissão não implicará limitação de uso do material
        pelo <strong>DESENVOLVEDOR</strong>. Se o <strong>USUÁRIO</strong> não concorda em autorizar o
        https://citi.org.br/ a utilizar sua contribuição conforme acima, o <strong>USUÁRIO</strong>
        então não deverá submeter qualquer material para a plataforma.
      </p>
      <p>
        7.6. Todos os direitos autorais patrimoniais sobre o material submetido
        pelo <strong>USUÁRIO</strong> continuam sendo de sua propriedade e seu nome será citado
        sempre que o material for utilizado pelo <strong>DESENVOLVEDOR</strong>, conforme informado
        pelo <strong>USUÁRIO</strong>, exceto se o espaço ou suporte físico em que for figurar não
        possibilitar essa citação. O <strong>DESENVOLVEDOR</strong> não está obrigado a utilizar os
        materiais enviados pelo <strong>USUÁRIO</strong>.
      </p>
      <p>
        7.7. O <strong>USUÁRIO</strong> reconhece e declara que em qualquer contribuição submetida
        para a plataforma, o material correspondente é de sua exclusiva criação,
        não constituindo violação de direitos autorais, marcas, segredos, direitos
        de personalidade, incluindo honra, intimidade, vida privada e a imagem das
        pessoas, direitos patrimoniais e quaisquer outros direitos de terceiros e
        que possui poderes para autorizar o uso do material pelo <strong>DESENVOLVEDOR</strong>
        conforme acima.
      </p>
      <p>
        7.8. Desde que citada a fonte (inclusive o nome do autor, quando possível e
        aplicável) e dentro das condições e limites previstos em lei, notadamente a
        Lei de Direitos Autorais (Lei n.º 9.610/98), o <strong>USUÁRIO</strong> não pode reproduzir,
        publicar, apresentar, alugar, oferecer ou expor qualquer cópia de qualquer
        conteúdo pertencente ao <strong>DESENVOLVEDOR</strong> sem o seu consentimento ou, no caso
        de conteúdo de autoria de terceiros, sem o consentimento do autor ou
        autora.
      </p>
      <p>
        7.9. O <strong>USUÁRIO</strong> se compromete a cumprir todas as leis nacionais e
        internacionais referentes aos Direitos de Propriedade Intelectual.
      </p>

      <H2>8. Denúncia de abusos e violação</H2>
      <p>
        8.1. Não é permitida a utilização de nenhum dispositivo, software, ou outro
        recurso que venha a interferir nas atividades e operações do site bem como
        nas publicações de ofertas, produtos ou serviços, descrições, contas ou
        seus bancos de dados. Qualquer intromissão, tentativa de, ou atividade que
        viole ou contrarie as leis de direito de propriedade intelectual e/ou as
        proibições estipuladas neste Termo de Uso, tornarão o responsável passível
        das ações legais pertinentes, sendo ainda responsável pelas indenizações
        por eventuais danos causados.
      </p>
      <p>
        8.2. O <strong>USUÁRIO</strong> se compromete a denunciar quaisquer abusos ou violação
        destes Termos e Condições de Uso ou de quaisquer direitos de terceiros que
        observar e/ou for vítima quando da utilização da Ferramenta. O <strong>USUÁRIO</strong> deve
        clicar em Reportar abuso nos comentários.
      </p>
      <p>
        8.3. Todo conteúdo que o <strong>USUÁRIO</strong> publica utilizando a Ferramenta é uma
        informação que, por sua natureza e característica, é pública, aberta e não
        confidencial. Ao revelar dados pessoais, tais como seu nome e endereço de
        e-mail nos comentários, o <strong>USUÁRIO</strong> aceita e compreende que essa informação
        pode ser coletada e usada por outras pessoas para se comunicarem com ele,
        sem que seja imputável qualquer responsabilidade ao <strong>DESENVOLVEDOR</strong>. Desta
        forma, o <strong>DESENVOLVEDOR</strong> recomenda que o <strong>USUÁRIO</strong> seja, portanto, cuidadoso ao
        decidir compartilhar qualquer dado pessoal na Plataforma.
      </p>

      <H2>9. Limitação de responsabilidades do desenvolvedor</H2>
      <p>
        9.1. A plataforma e seus Conteúdos são disponibilizados no estado em que se
        encontram e conforme estiverem disponíveis.
      </p>
      <p>
        9.2. O <strong>DESENVOLVEDOR</strong> se exime de quaisquer responsabilidades sobre
        prejuízos resultantes de qualquer interrupção ou erro na plataforma,
        incluindo a impossibilidade de acessar a plataforma e/ou os websites
        relacionados a ele;
      </p>
      <p>
        9.3. Nega qualquer responsabilidade por quaisquer perdas ou danos
        decorrentes da utilização da plataforma ou de seu Conteúdo por parte do
        <strong>USUÁRIO</strong>. Você será o único responsável por qualquer perda ou dano
        resultante, incluindo qualquer perda de dados durante a utilização da
        plataforma (invasão de vírus, ou hackers, por exemplo);
      </p>
      <p>
        9.4. Não se responsabiliza por qualquer conteúdo impreciso ou incorreto
        causado por qualquer falha de equipamento ou programação publicado na
        plataforma;
      </p>
      <p>
        9.5. Não oferece quaisquer garantias com relação à funcionalidade da
        plataforma, à precisão de qualquer listagem de negócios, aos comentários
        sobre negócios, à propriedade intelectual de terceiros e aos produtos e
        Serviços de qualquer empresa listada ou anunciada;
      </p>
      <p>9.6. Não é responsável pela conduta online ou offline dos <strong>USUÁRIOS</strong>;</p>
      <p>
        9.7. Recomenda que toda transação seja realizada com cautela e bom senso. O
        <strong>USUÁRIO</strong> deverá sopesar os riscos da aquisição dos produtos e serviços, pois
        em nenhum caso o <strong>DESENVOLVEDOR</strong> será responsável pelo lucro cessante ou por
        qualquer outro dano e/ou prejuízo que o <strong>USUÁRIO</strong> possa sofrer devido às
        aquisições realizadas através da plataforma;
      </p>
      <p>
        9.8. A responsabilidade para com o <strong>USUÁRIO</strong>, por qualquer causa, e
        independentemente da forma da ação, será limitada ao valor pago, se for o
        caso, pelo <strong>USUÁRIO</strong> ao site;
      </p>
      <p>
        9.9. Não é proprietário dos produtos oferecidos pelos Anunciantes, não
        detém a posse deles, não realiza as ofertas de venda, tampouco, intervém na
        entrega dos produtos, cuja negociação se inicie na plataforma;
      </p>

      <H2>10. Modificações do termo de uso</H2>
      <p>
        10.1. O <strong>DESENVOLVEDOR</strong> poderá alterar estes Termos de Uso a qualquer tempo,
        com a finalidade de atualizá-los, adequá-los à legislação aplicável ou
        aprimorar o funcionamento e as informações disponibilizadas no site. As
        alterações entrarão em vigor a partir de sua publicação nesta página,
        indicando-se, sempre que possível, a data da última atualização. A
        continuidade da utilização do site após a publicação das alterações será
        interpretada como manifestação de ciência e concordância com a versão
        vigente dos Termos de Uso. Caso o visitante não concorde com as alterações
        realizadas, deverá interromper a utilização do site.
      </p>
      <p>
        10.2. As alterações não vigorarão em relação às escolhas, compromissos e
        aquisições já iniciados ao tempo em que as mesmas alterações sejam
        publicadas. Para estes, o Termo de Uso valerá com a redação anterior.
      </p>

      <H2>11. Legislação aplicável e foro</H2>
      <p>
        11.1. Este Termo de Uso é regido pelas leis vigentes na República
        Federativa do Brasil, especificamente pelo Marco Civil da Internet (Lei
        12.965/2014) e pela Lei Geral de Proteção de Dados (Lei 13.709/2018), e as
        partes submetem-se exclusivamente ao Foro da Comarca de Recife - PE com
        renúncia a qualquer outro, por mais privilegiado que seja.
      </p>

      <H2>12. Disposições gerais</H2>
      <p>
        12.1. Este Termo de Uso não gera nenhum contrato de sociedade, de mandato,
        franquia ou relação de trabalho entre o <strong>DESENVOLVEDOR</strong> e o <strong>USUÁRIO</strong> e seus
        contatos. O <strong>USUÁRIO</strong> manifesta ciência de que o <strong>DESENVOLVEDOR</strong> não é parte de
        nenhuma transação, nem possui controle algum sobre a qualidade e a
        segurança dos produtos e/ou serviços anunciados.
      </p>
      <p>
        12.2. Este Termo de Uso constitui o contrato integral entre você, <strong>USUÁRIO</strong>,
        e o site em relação ao uso da plataforma. O fato de o site,
        https://citi.org.br/, não exercer ou executar qualquer direito ou
        disposição do contrato não significa uma renúncia a tal direito ou
        disposição. Este contrato se aplica na máxima extensão permitida por lei. A
        declaração de nulidade de qualquer cláusula ou item deste contrato não
        prejudicará as demais, que continuarão em vigor e deverão ser integralmente
        cumprida.
      </p>
      <p>
        12.3. O https://citi.org.br/ garante a integridade dos resultados obtidos
        por meio dos lances, e se compromete a aferir constantemente se os lances
        ofertados não são realizados por meio de bots programados.
      </p>
      <p>
        Os casos omissos neste instrumento serão resolvidos de conformidade com as
        disposições legais aplicáveis à espécie.
      </p>
      <p>
        Estes Termos de Uso foram atualizados pela última vez em 24 de julho de
        2026.
      </p>
    </LegalPage>
  );
}
