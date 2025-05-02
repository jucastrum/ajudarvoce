'use client'

import Accordion from '@/components/Accordion/Accordion'
import { AccordionItem } from '@/components/Accordion/AccordionItem'
import styles from './Services.module.css'

export default function ServicesAccordion() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        Tipos de serviços de saúde mental em Manaus</div>
      <div className={styles.subtitle}>
        Para que você saiba onde pode pedir ajuda, separamos os locais mais comuns de atendimentos e explicamos como funcionam.
      </div>

      <Accordion>
        <AccordionItem title="Centro de Atenção Psicossocial (CAPS)">
        <p>Os Centros de Atenção Psicossocial (CAPS) são especializados em tratamento e reinserção social de pessoas com transtorno mental grave e persistente. Os centros oferecem um atendimento interdisciplinar, composto por uma equipe multiprofissional que reúne médicos, assistentes sociais, psicólogos, psiquiatras, entre outros.</p>
        <p>&nbsp;</p>
    <p>É o serviço para atendimento das questões relacionadas aos transtornos mentais. Deve ser procurado caso a pessoa precise de atendimento ou avaliação psicológica e/ou psiquiátrica. Busque o CAPS mais próximo da sua residência ou que atenda a sua região. Não é necessário agendar, porém, sugerimos que verifique o horário de funcionamento do serviço para não perder a viagem.</p>
    <p>&nbsp;</p>
    <p>Atenção: Alguns CAPS solicitam que o paciente seja encaminhado pela UBS, então, é importante que você verifique como o CAPS e a UBS da sua região funcionam.</p>
    <p>&nbsp;</p>
    <p><strong>Os CAPS tem algumas unidades especializadas. Conheça as diferenças:</strong></p>
    <ul className={styles.discList}>
        <li><strong>CAPS I:</strong>&nbsp;atende pessoas de todas as faixas etárias que apresentam sofrimento mental grave e persistente, incluindo aquele decorrente do uso nocivo e dependência de álcool e outras drogas.</li>
        <li><strong>CAPS II:</strong>&nbsp;atende pessoas maiores de 18 anos que apresentam sofrimento mental grave e persistente.</li>
        <li><strong>CAPS III:</strong> atende pessoas maiores de 18 anos que apresentam sofrimento mental grave e persistente. Proporciona serviços de atenção contínua, com funcionamento vinte e quatro horas, incluindo feriados e finais de semana, e acolhimento noturno.</li>
        <li><strong>CAPS i:</strong>&nbsp;atende crianças e adolescentes que apresentam sofrimento mental grave e persistente, até 18 anos, incluindo aquele relacionado ao uso de álcool e outras drogas, até 16 anos.</li>
        <li><strong>CAPS AD:</strong>&nbsp;atende pessoas maiores de 16 anos que apresentam sofrimento mental grave e persistente decorrente do uso nocivo e dependência de álcool e outras drogas.</li>
        <li><strong>CAPS AD III Álcool e Drogas:</strong>&nbsp;atende pessoas maiores de 16 anos que apresentam sofrimento mental grave e persistente decorrente do uso nocivo e dependência de álcool e outras drogas. Proporciona serviços de atenção contínua, com funcionamento vinte e quatro horas, incluindo feriados e finais de semana, e acolhimento noturno.</li>
    </ul>
    <p>&nbsp;</p>
    <p><strong>Horário de atendimento:</strong></p>
    <ul className={styles.discList}>
        <li><strong>CAPS I, CAPS II, CAPS AD II e CAPS i:</strong>&nbsp;segunda a sexta, das 7h às 18h.</li>
        <li><strong>CAPS III e CAPS AD III:</strong>&nbsp;24 horas.</li>
    </ul>
        </AccordionItem>

        <AccordionItem title="Unidade Básica de Saúde (UBS)">
<p>Conhecida também como posto de saúde ou "casinha" de saúde. Cada região tem uma UBS, muitas atendem casos de saúde mental leves e moderados, além de fazerem o encaminhamento aos CAPS quando necessário.&nbsp;</p>
<p>Você deve procurar esse serviço se sua região não tiver CAPS.</p>
        </AccordionItem>

        <AccordionItem title="Hospital psiquiátrico">
        Deve ser procurado em caso de urgência psiquiátrica, quando alguém está em crise, como por exemplo:
        <p>&nbsp;</p>
<ul className={styles.discList}>
    <li>Tem um surto (perde o controle do que fala ou faz);</li>
    <li>Vê ou ouve coisas que ninguém mais vê ou ouve (alucinações);</li>
    <li>Acredita em coisas que não são reais, como que está sendo perseguido ou que é outra pessoa (delírios);</li>
    <li>Fala em se machucar ou tirar a própria vida (crise suicida).</li>
</ul>
<p>&nbsp;</p>
<p>O hospital psiquiátrico é um local especializado para cuidar da saúde mental nesses momentos.&nbsp;</p>
<p>Lá, a pessoa recebe apoio médico e psicológico para se estabilizar e voltar a se sentir melhor com segurança.</p>
        </AccordionItem>
        <AccordionItem title="Pronto socorro">
        <p>O pronto-socorro deve <strong>ser procurado imediatamente em situações de urgência ou risco de vida</strong>, como:</p>
<ul className={styles.discList}>
    <li><strong>Surto intenso</strong>, em que a pessoa perde totalmente o controle do que diz ou faz;</li>
    <li>Tentativa de suicídio ou risco de que a pessoa se machuque;</li>
    <li>Quando a pessoa estiver muito agitada, agressiva ou fora da realidade e não conseguir se acalmar.</li>
</ul>
<p>&nbsp;</p>
<p>Dê preferência a pronto-socorros que tenham ala psiquiátrica ou enfermaria especializada em saúde mental, pois esses locais têm profissionais treinados para lidar com esse tipo de situação.</p>
<p>&nbsp;</p>
<p>Se a pessoa ingeriu remédios em excesso ou substâncias tóxicas, leve com você as caixas, embalagens ou qualquer informação sobre o que foi ingerido. Isso ajuda os médicos a prestarem o atendimento correto e mais rápido.</p>
        </AccordionItem>

        <AccordionItem title="Psicólogo">
        <p>O psicólogo é o profissional que cuida da saúde mental usando a psicoterapia — um tratamento sem uso de medicamentos, baseado em técnicas que ajudam a entender sentimentos, enfrentar problemas e melhorar a qualidade de vida.</p>
<p>De acordo com a Organização Mundial da Saúde (OMS), a saúde mental é um estado de bem-estar no qual o indivíduo percebe suas próprias habilidades, pode lidar com os estresses normais da vida, trabalhar de forma produtiva e contribuir para a sua comunidade. A psicoterapia é uma ferramenta fundamental para promover e restaurar esse bem-estar.</p>
<p>&nbsp;</p>
<p>Alguns exemplos de como a psicoterapia pode ajudar:</p>
<ul className={styles.discList}>
    <li>Acolher e identificar sentimentos difíceis, como medo, tristeza, raiva e angústia, oferecendo suporte para lidar com essas emoções;</li>
    <li>Diferenciar situações como depressão, tristeza e luto: depressão é uma doença e precisa de avaliação médica; tristeza é um sentimento 
      natural diante de perdas ou frustrações; luto é um processo emocional complexo que ocorre após a perda de alguém ou algo importante; </li>
    <li>Oferecer apoio para enfrentar obstáculos, frustrações e momentos de crise, fortalecendo a capacidade de adaptação;</li>
    <li>Desenvolver habilidades emocionais, como a resiliência, para lidar melhor com situações difíceis;</li>
    <li>Identificar padrões de relacionamento tóxicos e construir formas mais saudáveis de se relacionar;</li>
    <li>Reconstruir autoestima e autoconfiança, transformando pensamentos negativos ou distorcidos sobre si mesmo;</li>
    <li>Ressignificar experiências traumáticas, ajudando a reduzir o impacto emocional do trauma;</li>
    <li>Estimular novas formas criativas de resolver problemas e enfrentar desafios;</li>
    <li>Redefinir objetivos de vida de forma mais realista e alcançável;</li>
    <li>Promover uma sensação geral de equilíbrio, bem-estar e qualidade de vida.</li>
</ul>
<p>A psicoterapia é recomendada não apenas em momentos de crise, mas também como um cuidado contínuo para quem deseja se conhecer melhor e viver de forma mais plena.</p>
<p>&nbsp;</p>
<p>Referências: Organização Mundial da Saúde (OMS). Saúde mental: fortalecer nossa resposta.&nbsp;</p>
<p>American Psychological Association (APA). Benefícios da Psicoterapia.</p>
<p>SCAVACINI, K., GUEDES, I., CACCIACARRO, M. Prevenção do suicídio na internet: pais e adolescentes. São Paulo: Instituto Vita Alere de Prevenção e Posvenção do Suicídio, 2019.</p>
        </AccordionItem>

        <AccordionItem title="Psiquiatra">
        <p>O psiquiatra é o médico especializado em cuidar da saúde mental. Ele é capacitado para avaliar, diagnosticar e tratar transtornos mentais, podendo também prescrever medicamentos quando necessário.</p>
<p>&nbsp;</p>
<p><strong>Quando devo procurar um psiquiatra?</strong></p>
<p>&nbsp;</p>
<p>Muitas pessoas ainda pensam que procurar um psiquiatra "é coisa de gente louca", mas isso é um mito.&nbsp;</p>
<p>Na verdade, o psiquiatra é o profissional mais indicado para ajudar em situações como:</p>
<ul className={styles.discList}>
    <li>Tristeza intensa e duradoura;</li>
    <li>Ansiedade excessiva;</li>
    <li>Ataques de pânico;</li>
    <li>Mudanças de comportamento;</li>
    <li>Dificuldade para dormir ou se concentrar;</li>
    <li>Pensamentos de autolesão ou suicídio.</li>
</ul>
<p>&nbsp;</p>
<p><strong>Como saber se alguém precisa de ajuda psiquiátrica?</strong></p>
<p>&nbsp;</p>
<p>Alguns sinais de alerta importantes são:</p>
<ul className={styles.discList}>
    <li>Mudanças bruscas de humor ou comportamento;</li>
    <li>Isolamento social sem motivo claro;</li>
    <li>Perda de interesse em atividades que antes eram prazerosas;</li>
    <li>Falar sobre querer morrer ou se machucar;</li>
    <li>Uso excessivo de álcool ou drogas;</li>
    <li>Falas desconexas, confusas ou comportamentos estranhos.</li>
</ul>
<p>&nbsp;</p>
<p><strong>Atenção:</strong> Os sinais citados acima são apenas indicativos.</p>
<p>Eles não substituem a avaliação de um profissional.</p>
<p>Sempre busque ajuda médica para um diagnóstico correto e seguro.</p>
       </AccordionItem>

       <AccordionItem title="Clínica-escola">
       <p>Uma clínica-escola é um espaço dentro de faculdades ou universidades onde estudantes de Psicologia, sob supervisão de professores e profissionais experientes, realizam atendimentos psicológicos à comunidade. Nesses locais, estudantes de Psicologia (em fase de estágio supervisionado) oferecem serviços como:</p>
<ul className={styles.discList}>
    <li>Avaliação psicológica</li>
    <li>Psicoterapia</li>
    <li>Orientação vocacional</li>
    <li>Atendimento psicopedagógico</li>
</ul>
<p>&nbsp;</p>
<p>Geralmente, esses atendimentos são gratuitos ou têm custos reduzidos, tornando-os acessíveis para a população em geral.</p>
<p>&nbsp;</p>
<p><strong>Importante:</strong> Os serviços oferecidos podem variar em cada clínica-escola.&nbsp;</p>
<p>Entre em contato diretamente com a instituição para confirmar quais atendimentos estão disponíveis, como funciona o agendamento e se há custos envolvidos.</p>
       </AccordionItem>

       <AccordionItem title="Organizações não governamentais (ONGs)">
       <p>ONGs (Organizações Não Governamentais) são entidades sem fins lucrativos que atuam em diversas áreas da sociedade, como educação, saúde, cultura e meio ambiente. No campo da saúde mental, muitas delas oferecem atendimento psicológico gratuito ou voluntário, ajudando pessoas em situações de vulnerabilidade.</p>
<p>&nbsp;</p>
<p><strong>Por que procurar uma ONG de saúde mental?</strong></p>
<p>&nbsp;</p>
<p>As ONGs de saúde mental desempenham um papel fundamental na comunidade, oferecendo:</p>
<ul>
    <li>Atendimento psicológico gratuito.</li>
    <li>Apoio emocional e psicológico sem custos.</li>
    <li>Espaços de acolhimento e apoio contínuo para quem enfrenta dificuldades psicológicas.</li>
    <li>Programas de prevenção e conscientização sobre a importância da saúde mental.</li>
</ul>
<p>&nbsp;</p>
<p><strong>Como elas atuam na comunidade?</strong></p>
<p>&nbsp;</p>
<p>As ONGs ajudam a criar uma rede de apoio local, fornecendo recursos essenciais para quem não tem acesso a tratamentos convencionais. Elas também:</p>
<ul>
    <li>Promovem campanhas de conscientização sobre saúde mental.</li>
    <li>Oferecem grupos de apoio, terapias e oficinas para fortalecer o bem-estar emocional.</li>
    <li>
        <p>Criam parcerias com outras organizações e instituições públicas para amplificar seu impacto social.</p>
        <p>&nbsp;</p>
    </li>
</ul>
<p><strong>Onde encontrar ONGs de saúde mental?</strong></p>
<p>&nbsp;</p>
<p>Procure ONGs na sua cidade ou região. Elas podem ser uma excelente alternativa quando você precisar de apoio psicológico e outros serviços relacionados à saúde mental.</p>
     </AccordionItem>
      </Accordion>
    </section>
  )
}
