import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/logo.webp";

import Footer from "../../components/Footer";
import { Container, LogoBox, TextBox, BackUp } from "./styles";

import { TiArrowUpThick } from "react-icons/ti";

const scrollThreshold = 0.5;

const scrollTop = function () {
  window.scrollTo(0, 0);
};

const Terms = () => {
  const [scrollY, setScrollY] = useState(0);
  const classes = scrollY >= scrollThreshold ? "scrollMenu" : "";

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }

    try {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    } catch (error) {
      return console.error(error);
    }
  }, []);

  return (
    <>
      <Container>
        <LogoBox>
          <Link to={"../"}>
            <img src={Logo} alt="Qually Grama - Logo" />
          </Link>
        </LogoBox>

        <TextBox>
          <h2>Política Privacidade</h2>
          <p>Tatuí, 30 de Agosto de 2021</p>
          <p>
            A Política de Privacidade a seguir tem como fito objetivar o
            compromisso da Qually Grama, pessoa jurídica de direito privado,
            inscrita no CNPJ sob o nº 03.000.032/0001-85, com sede na Sitio Bela
            Vista, s/n, Pederneiras, Tatuí/SP, CEP 18270-999, demonstrando zelo
            com a privacidade e a proteção dos dados pessoais coletados de seus
            USUÁRIOS, delimitando as regras sobre a coleta, registro,
            armazenamento, uso, compartilhamento, enriquecimento e eliminação
            dos dados coletados dentro do escopo dos serviços e funcionalidades
            no site da Qually Grama, de acordo com as leis em atual contexto.
          </p>
          <p>
            Para a utilização do presente site da Qually Grama, e utilização de
            seus recursos, o USUÁRIO declara ser maior de 18 (dezoito) anos e
            ter feito a leitura completa e focada das regras deste documento,
            estando plenamente ciente, demonstrando assim sua livre e expressa
            concordância com os termos aqui estabelecidos.
          </p>
          <p>
            A Política de Privacidade se aplica a todos domínios da Qually Grama
            : os produtos, serviços, sites e hotsites oferecidos e mantidos.
            Aplica-se também às suas afiliadas, subsidiárias e/ou empresas
            ligadas.
          </p>
          <p>
            Existindo possibilidade de violação à proteção de dados dos
            titulares relacionados ao USUÁRIO, deverão ser passadas a Qually
            Grama, através dos meios de comunicação disponíveis no site da
            Qually Grama. Colocamo-nos à disposição para tomar as providências
            necessárias para evitar tais violações ou quando impossível
            impedi-las, mitigar os riscos inerentes ao caso em questão.
          </p>
          <p>
            Supondo que o USUÁRIO não se enquadre na descrição acima e/ou não
            concorde, ainda que em parte, com os termos e condições contidos
            nesta Política de Privacidade, não deverá acessar e/ou utilizar
            quaisquer serviços oferecidos pela Qually Grama.
          </p>
          <h2>1. DADOS COLETADOS, FORMA E FINALIDADE DA COLETA</h2>
          <p>
            1.1 A partir do momento em que o usuário insere ou submete seus
            dados (nome, sobrenome, celular, telefone, e-mail, CPF/CNPJ,
            endereço, graduação e outros), de forma voluntária, poderão ser
            coletados e utilizados, dependendo da funcionalidade que envolve os
            dados em questão, podendo também ser requeridos de acordo com o que
            busca o usuário.
          </p>
          <p>
            1.2 Os dados pessoais do usuário e do visitante coletados e
            armazenados pela plataforma da Qually Grama tem por finalidade:
          </p>

          <ul>
            <li>
              • Bem-estar do usuário e visitante: aprimorar o produto e/ou
              serviço oferecido, facilitar, agilizar e cumprir os compromissos
              estabelecidos entre o usuário e a empresa, melhorar a experiência
              dos usuários e fornecer funcionalidades específicas a depender das
              características básicas do usuário.
            </li>
            <li>
              • Melhorias da plataforma: compreender como o usuário utiliza os
              serviços da plataforma, para ajudar no desenvolvimento de negócios
              e técnicas.
            </li>
            <li>
              • Anúncios: apresentar anúncios personalizados para o usuário com
              base nos dados fornecidos.
            </li>
            <li>
              • Comercial: os dados são usados para personalizar o conteúdo
              oferecido e gerar subsídio à plataforma para a melhora da
              qualidade no funcionamento dos serviços.
            </li>
            <li>
              Previsão do perfil do usuário: tratamento automatizados de dados
              pessoais para avaliar o uso na plataforma.
            </li>
            <li>
              • Dados de cadastro: para permitir o acesso do usuário a
              determinados conteúdos da plataforma, exclusivo para usuários
              cadastrados.
            </li>
            <li>
              • Dados de contrato: conferir às partes segurança jurídica e
              facilitar a conclusão do negócio.
            </li>
            <li>• Outras</li>
          </ul>

          <p>
            1.3 O Usuário tem plena consciência de que fornece suas informações
            de forma consciente e voluntária por meio de formulários de
            cadastro, e é de sua inteira responsabilidade e dever mantê-los
            atualizados, também garantir a veracidade das informações que
            insere.
          </p>

          <p>
            1.4 As presentes tecnologias respeitarão sempre a legislação vigente
            e os termos desta Política de Privacidade.
          </p>

          <p>
            1.5 O usuário consente que fornece seus dados, e que eles são
            coletados de forma individual, clara, específica e legítima.
          </p>

          <p>
            1.6 O usuário poderá alterar o caminho de tratamento de seus dados,
            conceder novas permissões ou retirar seu consentimento para as
            permissões atuais, sendo alertado das consequências que a retirada
            de consentimento poderá causar.
          </p>

          <p>
            1.7 Se, em algum momento, o usuário se sentir incomodado e não
            desejar mais receber quaisquer informativos publicitários da Qually
            Grama, poderá, a qualquer momento, nos contatar por meio do
            telefone:(15) 3205-9300, manifestando a sua oposição. Os dados
            coletados e as atividades registradas também poderão ser
            compartilhados:
          </p>

          <ul>
            <li>
              i) Com autoridades judiciais, administrativas ou governamentais
              competentes, sempre que houver determinação legal, requerimento,
              requisição ou ordem judicial;
            </li>
            <li>
              ii) De forma automática em caso de movimentações societárias, como
              fusão, aquisição e incorporação.
            </li>
          </ul>

          <p>
            1.8 Internamente, os dados coletados são acessados somente por
            profissionais devidamente autorizados, respeitando os princípios de
            proporcionalidade, necessidade e relevância para os objetivos do
            site da Qually Grama, além do compromisso de confidencialidade e
            preservação da privacidade nos termos desta Política de Privacidade.
          </p>

          <h2>2. ARMAZENAMENTO DE DADOS</h2>

          <p>
            2.1 A Qually Grama armazenará as informações coletadas em servidores
            próprios ou por ela contratados, físicos ou virtuais.
          </p>

          <p>
            2.2 As informações do USUÁRIO serão armazenadas em nossos servidores
            e sempre que houver necessidade de identificação ou fornecimento de
            informações, a transmissão de dados entre computador do USUÁRIO e o
            site da Qually Grama será realizada através de uma conexão segura.
          </p>

          <p>
            2.3 A Qually Grama utiliza os meios razoáveis de mercado e
            legalmente requeridos para preservar a privacidade dos dados
            coletados. Desta forma, adota por exemplo as seguintes precauções:
          </p>

          <ul>
            <li>
              i. Quando necessário a Qually Grama utiliza os métodos padrão e de
              mercado para criptografar e anonimizar os dados coletados;
            </li>
            <li>
              ii. A Qually Grama possui proteção contra acesso não autorizado a
              seus sistemas;
            </li>

            <li>
              iii. A Qually Grama somente autoriza o acesso de pessoas
              previamente estabelecidas ao local onde são armazenadas as
              informações coletadas;
            </li>
            <li>
              iv. Aqueles que entram em contato com as informações se
              comprometem a manter sigilo absoluto. A quebra do sigilo
              acarretará responsabilidade civil e o responsável será
              responsabilizado nos moldes da legislação brasileira.
            </li>
          </ul>

          <p>
            2.4 A Qually Grama adota os melhores esforços, no sentido de
            preservar a privacidade dos dados dos USUÁRIOS.
          </p>

          <p>
            2.5 Incumbe exclusivamente ao USUÁRIO, cumprir a legislação vigente
            a respeito da proteção de dados pessoais dos indivíduos (doravante
            “titulares”, conforme art. 5º, V, LGPD) com quem possua relação ou
            venha a se relacionar no exercício de suas atividades empresariais.
          </p>

          <p>
            2.6 Orientamos os USUÁRIO a tomarem as medidas apropriadas para se
            protegerem, como, por exemplo, mantendo confidenciais os nomes de
            USUÁRIO e senha de acesso criados.
          </p>

          <h2>3. COMPARTILHAMENTO DE DADOS</h2>

          <p>
            3.1 A Qually Grama poderá divulgar os dados pessoais coletados de
            terceiros, especificando o indivíduo e sua finalidade de tratamento,
            nas seguintes situações e nos limites autorizados pela lei:
          </p>

          <ul>
            <li>
              1. Para propósitos administrativos como: pesquisa, planejamento,
              desenvolvimento de serviços, segurança e gerenciamento de risco.
            </li>
            <li>
              2. Para fins de entrega do serviço contratado com a Qually Grama.
            </li>

            <li>
              3. Quando necessário para cumprir uma obrigação legal,
              determinação de autoridade competente ou decisão judicial.
            </li>
            <li>
              3.2 Em alguns casos a Qually Grama poderá divulgar os Dados
              Pessoais coletados com o objetivo de cumprir a legislação
              aplicável ou por meio de ordem ou intimação judicial ou
              administrativa.
            </li>

            <li>3.3 A divulgação legal poderá ser feita para:</li>

            <li>1. Cumprir com o disposto na Legislação.</li>
            <li>
              2. Investigar, impedir ou tomar medidas relacionadas à cooperação
              com órgãos públicos ou para proteger a segurança nacional.
            </li>
            <li>3. Execução de contratos.</li>
            <li>4. Investigação e defesa de alegações de terceiros.</li>
            <li>5. Proteção da segurança ou integridade dos serviços.</li>
          </ul>

          <h2>4. RETENÇÃO DE DADOS</h2>

          <p>
            4.1 O USUÁRIO declara estar ciente de que o site da Qually Grama é
            um ambiente criado para que as informações circulem de forma segura
            em ambiente restrito e compartilhado com diversos outros agentes de
            tratamento (art. 5º, IX, LGPD), cujas regras devem ser respeitadas,
            bem assim as preferências de privacidade e proteção dos dados
            pessoais de titulares que trafeguem em seus respectivos sites,
            aplicativos e plataformas, bem como facilitando sua navegação pela
            internet, ou com os quais o USUÁRIO venha a ter contato com dados
            pessoais.
          </p>

          <p>
            4.2 A Qually Grama irá reter informações dos Usuários/Titulares de
            dados somente pelo período da finalidade para as quais aquelas
            informações foram tratadas, incluindo a segurança do processamento,
            com obrigações jurídicas e regulamentares (por exemplo, auditoria,
            contabilidade e termos de retenção estatutária), litígios quanto ao
            processamento, e para o estabelecimento, exercício ou defesa de
            ações judiciais.
          </p>

          <p>
            4.3 O titular dos dados poderá solicitar a retificação e/ou exclusão
            dos dados pessoais por meio de solicitação direta por meio do
            telefone disponível na página da Qually Grama na internet (15)
            3205-9300, manifestando a sua oposição.
          </p>

          <p>
            4.4 Caso o USUÁRIO retire seu consentimento para finalidades
            fundamentais ao regular funcionamento do site da Qually Grama, os
            serviços e funcionalidades poderão ficar indisponíveis.
          </p>

          <p>
            4.5 Caso o USUÁRIO não conceda seu consentimento para as finalidades
            facultativas, relacionadas ao envio de informações de novidades,
            conteúdos, notícias e demais eventos relevantes para a manutenção do
            relacionamento, os serviços e funcionalidades do site da Qually
            Grama continuarão sendo disponibilizados regularmente.
          </p>

          <p>
            4.6 Para fins de auditoria, segurança, controle de fraudes e
            preservação de direitos, poderemos permanecer com o histórico de
            registro dos dados do USUÁRIO por prazo maior nas hipóteses que a
            lei ou norma regulatória assim estabelecer ou para preservação de
            direitos.
          </p>

          <h2>5. CONSENTIMENTO</h2>

          <p>
            Ao utilizar os serviços e fornecer as informações pessoais na
            plataforma, o usuário está consentindo com a presente Política de
            Privacidade. O usuário, ao cadastrar-se, manifesta conhecer e pode
            exercitar seus direitos de cancelar seu cadastro, acessar e
            atualizar seus dados pessoais e garante a veracidade das informações
            por ele disponibilizadas. O usuário tem direito de retirar o seu
            consentimento a qualquer tempo, para tanto deve entrar em contato
            por correio enviado ao seguinte endereço: Rua Onze de Agosto, 182
            Centro, Tatuí/SP, CEP 18270-001, ou através dos telefones (15)
            3205-9300 | (15) 99615-9898.
          </p>

          <h2>6. CONSENTIMENTO</h2>

          <p>
            6.1 Também utilizamos cookies, que são pequenos arquivos de dados
            que são armazenados em seu computador e que permitem identificar
            suas preferências, facilitando a sua experiência de navegação na
            Internet.
          </p>

          <p>
            6.2 Os cookies são capazes de identificar o aparelho que você está
            utilizando, e coletar dados de registro, como: navegador, sistema
            operacional, endereço IP (Internet Protocol), horários e origem de
            acesso ao nosso site, páginas visitadas, dados de localização.
          </p>

          <p>
            6.3 Não utilizamos nenhum tipo de decisão automatizada que impacte o
            USUÁRIO.
          </p>

          <p>
            6.4 Temos o direito de alterar o teor desta Política de Privacidade
            a qualquer momento, conforme a finalidade ou necessidade, tal qual
            para adequação e conformidade legal de disposição de lei ou norma
            que tenha força jurídica equivalente, cabendo ao USUÁRIOS
            verificá-la sempre que efetuar o acesso no site da Qually Grama.
          </p>

          <p>
            6.5 Ocorrendo atualizações neste documento e que demandem nova
            coleta de consentimento, serão notificadas por meio dos contatos que
            fornecidos no cadastro.
          </p>

          <p>
            6.6 Em caso de qualquer dúvida com relação às disposições constantes
            desta Política de Privacidade, o USUÁRIO poderá entrar em contato
            por meio dos telefones (15) 3205-9300 | (15) 99615-9898,
            manifestando a sua oposição.
          </p>

          <p>
            6.7 Caso empresas terceirizadas realizem o processamento de
            quaisquer dados coletados, as mesmas deverão respeitar as condições
            aqui estipuladas e nossas normas de Segurança da Informação,
            obrigatoriamente.
          </p>

          <p>
            6.8 Caso alguma disposição desta Política de Privacidade seja
            considerada ilegal ou ilegítima por autoridade da localidade em que
            resida ou da sua conexão à Internet, as demais condições
            permanecerão em pleno vigor e efeito.
          </p>

          <p>
            6.9 O USUÁRIO reconhece que toda comunicação realizada por e-mail
            (aos endereços informados no seu cadastro), SMS, aplicativos de
            comunicação instantânea ou qualquer outra forma digital, virtual
            também são válidas, eficazes e suficiente para a divulgação de
            qualquer assunto que se refira aos serviços prestados, bem como às
            condições de sua prestação ou a qualquer outro assunto nele
            abordado, ressalvadas as disposições expressamente diversas
            previstas nesta Política de Privacidade.
          </p>

          <p>
            6.10 Esta Política será regida, interpretada e executada de acordo
            com as Leis da República Federativa do Brasil, especialmente a Lei
            nº 13.709/2018 (LGPD), independentemente das Leis de outros estados
            ou Países.
          </p>

          <p>
            6.11 E por estares as PARTES justas e acordadas, o USUÁRIO manifesta
            seu aceito e consentimento quanto a presente Política de
            Privacidade, para que produza todos os efeitos de fato e de direito.
          </p>

          <p>
            6.12 Fica eleito o foro da Comarca de Tatuí, Estado de São Paulo,
            para dirimir quaisquer dúvidas ou controvérsias oriundas deste
            instrumento, com renúncia a qualquer outro por mais privilegiado que
            seja.
          </p>

          <p>
            Data da modificação: <strong>30/08/2021</strong>
          </p>
        </TextBox>

        <BackUp className={classes}>
          <TiArrowUpThick onClick={() => scrollTop()} />
        </BackUp>
        <Footer />
      </Container>
    </>
  );
};

export default Terms;
