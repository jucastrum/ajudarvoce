'use client'

import Accordion from '@/components/Accordion/Accordion'
import { AccordionItem } from '@/components/Accordion/AccordionItem'
import styles from './ColorSystem.module.css'

export default function ColorSystem() {
  return (
    <section className={styles.container}>
      <Accordion>
        <AccordionItem title="Azul - não urgente" color="blue">
        <p>Sinais e sintomas que não são urgentes:</p>
<ul className={styles.discList}>
    <li>Se você está em tratamento e está estável;</li>
    <li>Caso seu medicamento esteja acabando;</li>
    <li>Acompanhamento do seu tratamento no ambulatório;</li>
    <li>Se você já está em acompanhamento e, por exemplo, passou por uma situação que te desestabilizou, desencadeando uma crise de ansiedade aguda, e você precisa de acolhimento (nesse caso, sugerimos que procure o local onde você já faz acompanhamento);</li>
    <li>Se você é familiar de alguém em tratamento para qualquer quadro psiquiátrico crônico e precisa de auxílio e orientação (nesse caso, sugerimos que procure a unidade que já presta atendimento ao seu familiar).</li>
</ul>
<p>&nbsp;</p>
<p>Muitos transtornos mentais podem apresentar um único <strong>*episódio agudo</strong> ou vários episódios ao longo da vida, caracterizando um <strong>*quadro crônico</strong>.</p>
<p>&nbsp;</p>
<p><strong>*Crise aguda:</strong> apresenta sintomas de rápida evolução, mas é possível alcançar a recuperação total.</p>
<p>&nbsp;</p>
<p><strong>*Condição crônica:</strong> apresenta sintomas ao longo de um longo período, não permitindo a recuperação total, mas sim o controle dos sintomas.</p>
        </AccordionItem>

        <AccordionItem title="Verde - baixo risco" color="green">
        <p>O sinal verde indica sinais e sintomas de <strong>baixo risco</strong>.</p>
<p>&nbsp;</p>
<p>Esse sinal deve acender para você quando estiver:</p>
<ul className={styles.discList}>
    <li>diante de insônia que não melhora;</li>
    <li>achando que está com depressão;</li>
    <li>doenças físicas agravadas por questões emocionais (sintomas psicossomáticos);</li>
    <li>crises de ansiedade;</li>
    <li>transtorno bipolar (crises depressivas ou maníacas que não envolvem risco para você ou para outras pessoas);</li>
    <li>alterações na consciência, memória, identidade, emoção, percepção do ambiente, controle dos movimentos e/ou do comportamento (síndromes dissociativas);</li>
    <li>uso abusivo de álcool ou outras drogas;</li>
    <li>situações de luto (alguém que você gosta ter morrido).</li>
</ul>
        </AccordionItem>

        <AccordionItem title="Amarelo - risco moderado" color="yellow">
        <p>O sinal amarelo indica um <strong>risco moderado</strong> para sua saúde mental.</p>
<p>&nbsp;</p>
<p>Busque atendimento quando estiver:</p>
<p>&nbsp;</p>
<ul className={styles.discList}>
    <li>Vivenciando episódios psicóticos agudos, como: Percepção da realidade alterada (alucinações ou delírios), sem sinais de agitação ou agressividade consigo ou com os outros;</li>
    <li>Enfrentando um quadro depressivo moderado, com ou sem pensamentos suicidas, desde que tenha apoio familiar ou social para tratamento fora do hospital;</li>
    <li>Passando por sinais leves de abstinência de álcool ou outras drogas, com capacidade de participar de tratamento ambulatorial;</li>
    <li>Tendo histórico psiquiátrico anterior, como tentativas de suicídio ou internações, mas com suporte familiar e social atualmente.</li>
</ul>
<p>&nbsp;</p>
<p><strong>O que são alucinações?</strong></p>
<p>Quando a pessoa vê, ouve ou sente coisas que outras pessoas não percebem.</p>
<p>&nbsp;</p>
<p><strong>O que são delírios?</strong></p>
<p>Crenças muito fortes que não correspondem à realidade, como acreditar que é uma figura famosa ou que está sendo perseguido sem motivo real.</p>
        </AccordionItem>

        <AccordionItem title="Laranja - risco elevado" color="orange">
        <p>O sinal laranja indica que <strong>você está diante de uma urgência, ou seja, risco elevado e precisa de atendimento clínico imediato</strong>, mesmo que não haja perigo de vida.</p>
<p>&nbsp;</p>
<p>Busque ajuda imediatamente nos casos de:</p>
<ul className={styles.discList}>
    <li><strong>Quadros depressivos graves</strong>, com ou sem sintomas psicóticos (alucinações ou delírios) e/ou pensamentos suicidas, <strong>sem planejamento</strong>, especialmente <strong>quando não há apoio familiar para tratamento fora do hospital</strong>;</li>
    <li><strong>Episódios psicóticos agudos</strong>, com percepção alterada da realidade (alucinações e delírios), <strong>sem agressividade</strong>, mas com perda significativa do autocuidado, prejudicando as atividades diárias;</li>
    <li><strong>Sinais de sofrimento emocional intenso</strong>, sem apoio familiar ou social disponível;</li>
    <li><strong>Sinais de abstinência leve a moderada</strong> em dependência de álcool ou outras drogas, <strong>com incapacidade de manter o tratamento</strong>, representando risco para si ou para os outros;</li>
    <li><strong>Episódios conversivos/dissociativos</strong>, com alterações graves de consciência, memória, identidade, emoção, percepção ou controle dos movimentos, colocando em risco a própria vida ou a de quem está próximo.</li>
</ul>
<p>&nbsp;</p>
<p><strong>O que é ideação suicida?</strong></p>
<p>A ideação suicida envolve pensamentos frequentes sobre tirar a própria vida.</p>
<p>Ela pode surgir em pessoas de qualquer idade, origem ou condição social, e é um sinal importante de sofrimento emocional. Esses pensamentos costumam estar associados a sentimentos de desesperança, culpa, baixa autoestima ou uma visão muito negativa da vida e do futuro. Em alguns casos, a pessoa pode expressar essas ideias de forma verbal, escrita ou através de comportamentos de isolamento.</p>
<p>É fundamental lembrar que o suicídio pode ser prevenido. Reconhecer esses sinais em si mesmo ou em alguém próximo é o primeiro passo para buscar ajuda e salvar vidas.</p>
        </AccordionItem>

        <AccordionItem title="Vermelho - emergência" color="red">
        <p>O sinal vermelho indica que você está diante de <strong>uma emergência, ou seja, de um risco grave que justifica a busca por um atendimento clínico e/ou especializado imediato.</strong></p>
<p>&nbsp;</p>
<p>Esse sinal é ligado aos casos:</p>
<ul className={styles.discList}>
    <li>de tentativa de suicídio em qualquer circunstância;</li>
    <li>em episódio depressivo grave com ideação suicida, planejamento ou história anterior de tentativa de suicídio;</li>
    <li>em episódio de Mania (euforia) com ou sem sintomas psicóticos (percepção alterada da realidade como alucinações e delírios) associado comportamento</li>
    <li>inadequado que oferece risco para si e/ou terceiros;</li>
    <li>intoxicação aguda por substâncias psicoativas (medicamentos, álcool e outras drogas);</li>
    <li>episódio de autoagressividade (automutilação) com risco de morte eminente</li>
    <li>casos com quadro de alcoolismo ou dependência química a outras drogas com sinais de agitação e/ou agressividade (para si ou para outros) com várias</li>
    <li>tentativas anteriores de tratamento fora do contexto hospitalar sem sucesso.</li>
</ul>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
