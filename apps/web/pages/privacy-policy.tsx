import { useLocale } from "@calcom/lib/hooks/useLocale";
import { NextPage } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const PrivacyPolicy: NextPage = () => {
  const { t } = useLocale('common');

  return (
    <div className={`p-10 mx-auto ${inter.className}`}>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            'ol.lst-kix_loq61q5wg07g-6.start{counter-reset:lst-ctn-kix_loq61q5wg07g-6 0}.lst-kix_loq61q5wg07g-8>li{counter-increment:lst-ctn-kix_loq61q5wg07g-8}ol.lst-kix_4snw3nm5tkx6-5.start{counter-reset:lst-ctn-kix_4snw3nm5tkx6-5 0}.lst-kix_1iiayrqsingt-6>li:before{content:"\\0025cf   "}.lst-kix_1iiayrqsingt-7>li:before{content:"\\0025cb   "}.lst-kix_4snw3nm5tkx6-8>li{counter-increment:lst-ctn-kix_4snw3nm5tkx6-8}ol.lst-kix_4snw3nm5tkx6-8.start{counter-reset:lst-ctn-kix_4snw3nm5tkx6-8 0}.lst-kix_loq61q5wg07g-7>li{counter-increment:lst-ctn-kix_loq61q5wg07g-7}.lst-kix_1iiayrqsingt-8>li:before{content:"\\0025a0   "}.lst-kix_bna1msyyg63-5>li:before{content:"\\0025a0   "}.lst-kix_bna1msyyg63-7>li:before{content:"\\0025cb   "}.lst-kix_bna1msyyg63-3>li:before{content:"\\0025cf   "}.lst-kix_bna1msyyg63-6>li:before{content:"\\0025cf   "}.lst-kix_1iiayrqsingt-3>li:before{content:"\\0025cf   "}.lst-kix_bna1msyyg63-1>li:before{content:"\\0025cb   "}.lst-kix_bna1msyyg63-2>li:before{content:"\\0025a0   "}.lst-kix_4snw3nm5tkx6-6>li{counter-increment:lst-ctn-kix_4snw3nm5tkx6-6}.lst-kix_1iiayrqsingt-4>li:before{content:"\\0025cb   "}.lst-kix_1iiayrqsingt-5>li:before{content:"\\0025a0   "}.lst-kix_bna1msyyg63-0>li:before{content:"\\0025cf   "}.lst-kix_bna1msyyg63-8>li:before{content:"\\0025a0   "}ol.lst-kix_4snw3nm5tkx6-2.start{counter-reset:lst-ctn-kix_4snw3nm5tkx6-2 0}.lst-kix_1iiayrqsingt-2>li:before{content:"\\0025a0   "}.lst-kix_1iiayrqsingt-0>li:before{content:"\\0025cf   "}.lst-kix_1iiayrqsingt-1>li:before{content:"\\0025cb   "}.lst-kix_bna1msyyg63-4>li:before{content:"\\0025cb   "}ul.lst-kix_bna1msyyg63-0{list-style-type:none}ul.lst-kix_u8ht4jcq72jm-5{list-style-type:none}ul.lst-kix_u8ht4jcq72jm-4{list-style-type:none}ul.lst-kix_bna1msyyg63-2{list-style-type:none}ul.lst-kix_u8ht4jcq72jm-7{list-style-type:none}ul.lst-kix_bna1msyyg63-1{list-style-type:none}ul.lst-kix_u8ht4jcq72jm-6{list-style-type:none}ul.lst-kix_bna1msyyg63-4{list-style-type:none}ul.lst-kix_u8ht4jcq72jm-1{list-style-type:none}ul.lst-kix_bna1msyyg63-3{list-style-type:none}.lst-kix_4snw3nm5tkx6-7>li:before{content:"" counter(lst-ctn-kix_4snw3nm5tkx6-7,lower-latin) ". "}ul.lst-kix_u8ht4jcq72jm-0{list-style-type:none}ul.lst-kix_bna1msyyg63-6{list-style-type:none}ul.lst-kix_u8ht4jcq72jm-3{list-style-type:none}ul.lst-kix_bna1msyyg63-5{list-style-type:none}ul.lst-kix_u8ht4jcq72jm-2{list-style-type:none}.lst-kix_4snw3nm5tkx6-8>li:before{content:"" counter(lst-ctn-kix_4snw3nm5tkx6-8,lower-roman) ". "}ul.lst-kix_u8ht4jcq72jm-8{list-style-type:none}ol.lst-kix_loq61q5wg07g-4{list-style-type:none}ol.lst-kix_4snw3nm5tkx6-3{list-style-type:none}ol.lst-kix_loq61q5wg07g-5{list-style-type:none}.lst-kix_4snw3nm5tkx6-1>li:before{content:"" counter(lst-ctn-kix_4snw3nm5tkx6-1,lower-latin) ". "}.lst-kix_4snw3nm5tkx6-2>li:before{content:"" counter(lst-ctn-kix_4snw3nm5tkx6-2,lower-roman) ". "}ol.lst-kix_4snw3nm5tkx6-4{list-style-type:none}.lst-kix_4snw3nm5tkx6-5>li{counter-increment:lst-ctn-kix_4snw3nm5tkx6-5}ol.lst-kix_loq61q5wg07g-6{list-style-type:none}ol.lst-kix_4snw3nm5tkx6-5{list-style-type:none}ol.lst-kix_loq61q5wg07g-7{list-style-type:none}ol.lst-kix_4snw3nm5tkx6-6{list-style-type:none}ol.lst-kix_loq61q5wg07g-8{list-style-type:none}ol.lst-kix_4snw3nm5tkx6-0{list-style-type:none}.lst-kix_4snw3nm5tkx6-3>li:before{content:"" counter(lst-ctn-kix_4snw3nm5tkx6-3,decimal) ". "}ol.lst-kix_4snw3nm5tkx6-1{list-style-type:none}ol.lst-kix_4snw3nm5tkx6-2{list-style-type:none}ol.lst-kix_4snw3nm5tkx6-3.start{counter-reset:lst-ctn-kix_4snw3nm5tkx6-3 0}ul.lst-kix_bna1msyyg63-8{list-style-type:none}ul.lst-kix_bna1msyyg63-7{list-style-type:none}.lst-kix_4snw3nm5tkx6-5>li:before{content:"" counter(lst-ctn-kix_4snw3nm5tkx6-5,lower-roman) ". "}.lst-kix_4snw3nm5tkx6-6>li:before{content:"" counter(lst-ctn-kix_4snw3nm5tkx6-6,decimal) ". "}.lst-kix_4snw3nm5tkx6-4>li:before{content:"" counter(lst-ctn-kix_4snw3nm5tkx6-4,lower-latin) ". "}ol.lst-kix_loq61q5wg07g-4.start{counter-reset:lst-ctn-kix_loq61q5wg07g-4 0}.lst-kix_loq61q5wg07g-4>li{counter-increment:lst-ctn-kix_loq61q5wg07g-4}.lst-kix_loq61q5wg07g-1>li{counter-increment:lst-ctn-kix_loq61q5wg07g-1}ol.lst-kix_4snw3nm5tkx6-7{list-style-type:none}.lst-kix_4snw3nm5tkx6-0>li:before{content:"" counter(lst-ctn-kix_4snw3nm5tkx6-0,decimal) ". "}ol.lst-kix_4snw3nm5tkx6-8{list-style-type:none}ol.lst-kix_loq61q5wg07g-3.start{counter-reset:lst-ctn-kix_loq61q5wg07g-3 0}ol.lst-kix_4snw3nm5tkx6-4.start{counter-reset:lst-ctn-kix_4snw3nm5tkx6-4 0}.lst-kix_loq61q5wg07g-8>li:before{content:"" counter(lst-ctn-kix_loq61q5wg07g-8,lower-roman) ". "}.lst-kix_u8ht4jcq72jm-1>li:before{content:"\\0025cb   "}.lst-kix_u8ht4jcq72jm-3>li:before{content:"\\0025cf   "}.lst-kix_u8ht4jcq72jm-2>li:before{content:"\\0025a0   "}.lst-kix_l9gtl89zihc5-7>li:before{content:"\\0025cb   "}.lst-kix_4snw3nm5tkx6-1>li{counter-increment:lst-ctn-kix_4snw3nm5tkx6-1}.lst-kix_loq61q5wg07g-6>li:before{content:"" counter(lst-ctn-kix_loq61q5wg07g-6,decimal) ". "}.lst-kix_u8ht4jcq72jm-5>li:before{content:"\\0025a0   "}.lst-kix_l9gtl89zihc5-5>li:before{content:"\\0025a0   "}.lst-kix_l9gtl89zihc5-6>li:before{content:"\\0025cf   "}.lst-kix_loq61q5wg07g-7>li:before{content:"" counter(lst-ctn-kix_loq61q5wg07g-7,lower-latin) ". "}.lst-kix_u8ht4jcq72jm-4>li:before{content:"\\0025cb   "}.lst-kix_loq61q5wg07g-3>li{counter-increment:lst-ctn-kix_loq61q5wg07g-3}.lst-kix_4snw3nm5tkx6-2>li{counter-increment:lst-ctn-kix_4snw3nm5tkx6-2}.lst-kix_loq61q5wg07g-0>li:before{content:"" counter(lst-ctn-kix_loq61q5wg07g-0,decimal) ". "}.lst-kix_loq61q5wg07g-2>li:before{content:"" counter(lst-ctn-kix_loq61q5wg07g-2,lower-roman) ". "}.lst-kix_loq61q5wg07g-1>li:before{content:"" counter(lst-ctn-kix_loq61q5wg07g-1,lower-latin) ". "}.lst-kix_loq61q5wg07g-5>li:before{content:"" counter(lst-ctn-kix_loq61q5wg07g-5,lower-roman) ". "}.lst-kix_u8ht4jcq72jm-6>li:before{content:"\\0025cf   "}.lst-kix_l9gtl89zihc5-8>li:before{content:"\\0025a0   "}.lst-kix_loq61q5wg07g-4>li:before{content:"" counter(lst-ctn-kix_loq61q5wg07g-4,lower-latin) ". "}.lst-kix_u8ht4jcq72jm-7>li:before{content:"\\0025cb   "}.lst-kix_loq61q5wg07g-3>li:before{content:"" counter(lst-ctn-kix_loq61q5wg07g-3,decimal) ". "}.lst-kix_u8ht4jcq72jm-8>li:before{content:"\\0025a0   "}ul.lst-kix_l9gtl89zihc5-4{list-style-type:none}ul.lst-kix_l9gtl89zihc5-3{list-style-type:none}ul.lst-kix_l9gtl89zihc5-2{list-style-type:none}ul.lst-kix_l9gtl89zihc5-1{list-style-type:none}ul.lst-kix_l9gtl89zihc5-8{list-style-type:none}.lst-kix_4snw3nm5tkx6-0>li{counter-increment:lst-ctn-kix_4snw3nm5tkx6-0}ul.lst-kix_l9gtl89zihc5-7{list-style-type:none}ol.lst-kix_loq61q5wg07g-5.start{counter-reset:lst-ctn-kix_loq61q5wg07g-5 0}ul.lst-kix_l9gtl89zihc5-6{list-style-type:none}ul.lst-kix_l9gtl89zihc5-5{list-style-type:none}ol.lst-kix_4snw3nm5tkx6-6.start{counter-reset:lst-ctn-kix_4snw3nm5tkx6-6 0}ul.lst-kix_l9gtl89zihc5-0{list-style-type:none}ol.lst-kix_loq61q5wg07g-0{list-style-type:none}ol.lst-kix_loq61q5wg07g-2.start{counter-reset:lst-ctn-kix_loq61q5wg07g-2 0}ol.lst-kix_loq61q5wg07g-1{list-style-type:none}.lst-kix_4snw3nm5tkx6-3>li{counter-increment:lst-ctn-kix_4snw3nm5tkx6-3}ol.lst-kix_loq61q5wg07g-2{list-style-type:none}ol.lst-kix_loq61q5wg07g-3{list-style-type:none}.lst-kix_l9gtl89zihc5-3>li:before{content:"\\0025cf   "}.lst-kix_l9gtl89zihc5-4>li:before{content:"\\0025cb   "}.lst-kix_l9gtl89zihc5-0>li:before{content:"\\0025cf   "}.lst-kix_loq61q5wg07g-2>li{counter-increment:lst-ctn-kix_loq61q5wg07g-2}ol.lst-kix_loq61q5wg07g-8.start{counter-reset:lst-ctn-kix_loq61q5wg07g-8 0}.lst-kix_l9gtl89zihc5-1>li:before{content:"\\0025cb   "}.lst-kix_l9gtl89zihc5-2>li:before{content:"\\0025a0   "}.lst-kix_loq61q5wg07g-5>li{counter-increment:lst-ctn-kix_loq61q5wg07g-5}.lst-kix_u8ht4jcq72jm-0>li:before{content:"\\0025cf   "}ul.lst-kix_1iiayrqsingt-6{list-style-type:none}ul.lst-kix_1iiayrqsingt-7{list-style-type:none}ul.lst-kix_1iiayrqsingt-4{list-style-type:none}ul.lst-kix_1iiayrqsingt-5{list-style-type:none}.lst-kix_4snw3nm5tkx6-4>li{counter-increment:lst-ctn-kix_4snw3nm5tkx6-4}ul.lst-kix_1iiayrqsingt-8{list-style-type:none}ol.lst-kix_loq61q5wg07g-1.start{counter-reset:lst-ctn-kix_loq61q5wg07g-1 0}.lst-kix_loq61q5wg07g-6>li{counter-increment:lst-ctn-kix_loq61q5wg07g-6}.lst-kix_loq61q5wg07g-0>li{counter-increment:lst-ctn-kix_loq61q5wg07g-0}ol.lst-kix_4snw3nm5tkx6-0.start{counter-reset:lst-ctn-kix_4snw3nm5tkx6-0 0}ol.lst-kix_loq61q5wg07g-0.start{counter-reset:lst-ctn-kix_loq61q5wg07g-0 0}ol.lst-kix_loq61q5wg07g-7.start{counter-reset:lst-ctn-kix_loq61q5wg07g-7 0}li.li-bullet-0:before{margin-left:-18pt;white-space:nowrap;display:inline-block;min-width:18pt}ol.lst-kix_4snw3nm5tkx6-7.start{counter-reset:lst-ctn-kix_4snw3nm5tkx6-7 0}ol.lst-kix_4snw3nm5tkx6-1.start{counter-reset:lst-ctn-kix_4snw3nm5tkx6-1 0}ul.lst-kix_1iiayrqsingt-2{list-style-type:none}ul.lst-kix_1iiayrqsingt-3{list-style-type:none}.lst-kix_4snw3nm5tkx6-7>li{counter-increment:lst-ctn-kix_4snw3nm5tkx6-7}ul.lst-kix_1iiayrqsingt-0{list-style-type:none}ul.lst-kix_1iiayrqsingt-1{list-style-type:none}ol{margin:0;padding:0}table td,table th{padding:0}.c4{-webkit-text-decoration-skip:none;color:#1155cc;font-weight:400;text-decoration:underline;vertical-align:baseline;text-decoration-skip-ink:none;font-size:11pt;font-family:"Arial";font-style:normal}.c0{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c3{color:#000000;font-weight:700;text-decoration:none;vertical-align:baseline;font-size:13pt;font-family:"Arial";font-style:normal}.c11{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left;height:11pt}.c13{color:#000000;text-decoration:none;vertical-align:baseline;font-size:17pt;font-family:"Arial";font-style:normal}.c8{color:#000000;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c2{padding-top:12pt;padding-bottom:12pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c14{padding-top:18pt;padding-bottom:4pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c10{padding-top:14pt;padding-bottom:4pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c9{text-decoration-skip-ink:none;-webkit-text-decoration-skip:none;color:#1155cc;text-decoration:underline}.c12{background-color:#ffffff;max-width:468pt;padding:72pt 72pt 72pt 72pt}.c1{color:inherit;text-decoration:inherit}.c6{margin-left:36pt;padding-left:0pt}.c7{padding:0;margin:0}.c5{font-weight:700}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}'
        }}
      />
      <h2 className="c14" id="h.60labd96fpyt">
        <span className="c5 c13">POLÍTICA DE PRIVACIDADE</span>
      </h2>
      <p className="c2">
        <span className="c5 c8">Última atualização: 15 de janeiro de 2025</span>
      </p>
      <p className="c2">
        <span className="c0">
          Este Aviso de Privacidade da Fitzroy.ai (fazendo negócios como Fitzroy.al)
          ("nós", "nos", "nosso"), descreve como e por que podemos acessar, coletar,
          armazenar, usar e/ou compartilhar ("processar") suas informações pessoais
          quando você usa nossos serviços ("Serviços"), incluindo quando você:
        </span>
      </p>
      <ul className="c7 lst-kix_bna1msyyg63-0 start">
        <li className="c2 c6 li-bullet-0">
          <span>Visita nosso site em</span>
          <span>
            <a
              className="c1"
              href="https://www.google.com/url?q=https://cal-production-2db9.up.railway.app/&sa=D&source=editors&ust=1737591070008770&usg=AOvVaw3iiRtvcwu6ylUPDwqoxO-Z"
            >
              &nbsp;
            </a>
          </span>
          <span className="c9">
            <a
              className="c1"
              href="https://www.google.com/url?q=https://cal-production-2db9.up.railway.app/&sa=D&source=editors&ust=1737591070008948&usg=AOvVaw2xA0yHJyWrais8jjFNIN6K"
            >
              https://cal-production-2db9.up.railway.app
            </a>
          </span>
          <span className="c0">
            , ou qualquer site nosso que vincule a este Aviso de Privacidade
          </span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c0">
            Interage conosco de outras formas relacionadas, incluindo vendas,
            marketing ou eventos
          </span>
        </li>
      </ul>
      <p className="c2">
        <span className="c5">Dúvidas ou preocupações?</span>
        <span className="c0">
          &nbsp;Ao ler este Aviso de Privacidade, você entenderá seus direitos e
          escolhas em relação à privacidade. Somos responsáveis por tomar decisões
          sobre como suas informações pessoais são processadas. Caso não concorde
          com nossas políticas e práticas, pedimos que não utilize nossos Serviços.
        </span>
      </p>
      <h3 className="c10" id="h.oikju13nbv7s">
        <span className="c3">RESUMO DOS PONTOS PRINCIPAIS</span>
      </h3>
      <p className="c2">
        <span className="c0">
          Este resumo fornece os pontos principais do nosso Aviso de Privacidade,
          mas você pode encontrar mais detalhes sobre qualquer um desses tópicos
          clicando no link após cada ponto ou usando o índice abaixo para encontrar
          a seção que deseja ler.
        </span>
      </p>
      <ol className="c7 lst-kix_loq61q5wg07g-0 start" start={1}>
        <li className="c2 c6 li-bullet-0">
          <span className="c5">
            Que informações pessoais processamos?
            <br />
          </span>
          <span className="c0">
            &nbsp;Quando você visita, usa ou navega pelos nossos Serviços, podemos
            processar informações pessoais dependendo de como você interage conosco
            e com os Serviços, das escolhas que faz e dos produtos e recursos que
            utiliza. Saiba mais sobre as informações pessoais que você divulga para
            nós.
            <br />
          </span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c5">
            Processamos informações sensíveis?
            <br />
          </span>
          <span className="c0">
            &nbsp;Algumas informações podem ser consideradas "sensíveis" em
            determinadas jurisdições (por exemplo, origem racial ou étnica,
            orientação sexual, crenças religiosas). Não processamos informações
            sensíveis.
            <br />
          </span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c5">
            Coletamos informações de terceiros?
            <br />
          </span>
          <span className="c0">
            &nbsp;Não coletamos informações de terceiros.
            <br />
          </span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c5">
            Como processamos suas informações?
            <br />
          </span>
          <span className="c0">
            &nbsp;Processamos suas informações para fornecer, melhorar e administrar
            nossos Serviços, nos comunicarmos com você, para segurança e prevenção
            de fraudes e para cumprir a lei. Podemos processar suas informações para
            outros fins com seu consentimento.
            <br />
          </span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c5">
            Quando e com quem compartilhamos suas informações pessoais?
            <br />
          </span>
          <span className="c0">
            &nbsp;Podemos compartilhar informações em situações específicas e com
            determinados terceiros.
            <br />
          </span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c5">
            Quais são seus direitos?
            <br />
          </span>
          <span className="c0">
            &nbsp;Dependendo da sua localização geográfica, a lei de privacidade
            aplicável pode conceder-lhe certos direitos em relação às suas
            informações pessoais.
            <br />
          </span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c5">
            Como exercer seus direitos?
            <br />
          </span>
          <span className="c0">
            &nbsp;A maneira mais fácil de exercer seus direitos é enviando uma
            solicitação de acesso a dados ou entrando em contato conosco.
            Consideraremos e agiremos sobre qualquer solicitação de acordo com as
            leis de proteção de dados aplicáveis.
            <br />
          </span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c5">
            Quer aprender mais sobre o que fazemos com as informações que coletamos?
            <br />
          </span>
          <span className="c0">
            &nbsp;Consulte o Aviso de Privacidade na íntegra.
            <br />
          </span>
        </li>
      </ol>
      <hr />
      <p className="c11">
        <span className="c0" />
      </p>
      <h3 className="c10" id="h.ncfwrfz9wiad">
        <span className="c3">ÍNDICE</span>
      </h3>
      <ol className="c7 lst-kix_4snw3nm5tkx6-0 start" start={1}>
        <li className="c2 c6 li-bullet-0">
          <span className="c9">
            <a
              className="c1"
              href="https://www.google.com/url?q=https://chatgpt.com/%231-o-que-coletamos&sa=D&source=editors&ust=1737591070010283&usg=AOvVaw1vRMe1AlSwctGh5Gpt_2tJ"
            >
              O QUE COLETAMOS?
            </a>
          </span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c9">
            <a
              className="c1"
              href="https://www.google.com/url?q=https://chatgpt.com/%232-como-processamos-suas-informa%25C3%25A7%25C3%25B5es&sa=D&source=editors&ust=1737591070010412&usg=AOvVaw3s1nVtahejClSJVxU8qsIE"
            >
              COMO PROCESSAMOS SUAS INFORMAÇÕES?
            </a>
          </span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c9">
            <a
              className="c1"
              href="https://www.google.com/url?q=https://chatgpt.com/%233-quando-e-com-quem-compartilhamos-suas-informa%25C3%25A7%25C3%25B5es-pessoais&sa=D&source=editors&ust=1737591070010536&usg=AOvVaw3yqHPcZ4hQ38Y5mutFb5Mg"
            >
              QUANDO E COM QUEM COMPARTILHAMOS SUAS INFORMAÇÕES PESSOAIS?
            </a>
          </span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c9">
            <a
              className="c1"
              href="https://www.google.com/url?q=https://chatgpt.com/%234-usamos-cookies-e-outras-tecnologias-de-rastreamento&sa=D&source=editors&ust=1737591070010653&usg=AOvVaw1wc3Tt3GwS4tacKcelnQOn"
            >
              USAMOS COOKIES E OUTRAS TECNOLOGIAS DE RASTREAMENTO?
            </a>
          </span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c9">
            <a
              className="c1"
              href="https://www.google.com/url?q=https://chatgpt.com/%235-como-gerenciamos-seus-logins-sociais&sa=D&source=editors&ust=1737591070010805&usg=AOvVaw2vl1oDEvKihDICmzbmPPxI"
            >
              COMO GERENCIAMOS SEUS LOGINS SOCIAIS?
            </a>
          </span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c9">
            <a
              className="c1"
              href="https://www.google.com/url?q=https://chatgpt.com/%236-por-quanto-tempo-mantemos-suas-informa%25C3%25A7%25C3%25B5es&sa=D&source=editors&ust=1737591070010917&usg=AOvVaw2X0P4h3l5fgX-ybWDC0Rpa"
            >
              POR QUANTO TEMPO MANTEMOS SUAS INFORMAÇÕES?
            </a>
          </span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c9">
            <a
              className="c1"
              href="https://www.google.com/url?q=https://chatgpt.com/%237-coletamos-informa%25C3%25A7%25C3%25B5es-de-menores&sa=D&source=editors&ust=1737591070011018&usg=AOvVaw3Vz_O5vCo2tGCmQ8FcBCM6"
            >
              COLETAMOS INFORMAÇÕES DE MENORES?
            </a>
          </span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c9">
            <a
              className="c1"
              href="https://www.google.com/url?q=https://chatgpt.com/%238-quais-s%25C3%25A3o-seus-direitos-de-privacidade&sa=D&source=editors&ust=1737591070011161&usg=AOvVaw3dOtgM3oEMMe2YNsndfspw"
            >
              QUAIS SÃO SEUS DIREITOS DE PRIVACIDADE?
            </a>
          </span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c9">
            <a
              className="c1"
              href="https://www.google.com/url?q=https://chatgpt.com/9-controles-para-recursos-do-not-track&sa=D&source=editors&ust=1737591070011289&usg=AOvVaw37yGLl8eBulGWLXYoWetVn"
            >
              CONTROLES PARA RECURSOS "DO-NOT-TRACK"
            </a>
          </span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c9">
            <a
              className="c1"
              href="https://www.google.com/url?q=https://chatgpt.com/%2310-atualizamos-este-aviso&sa=D&source=editors&ust=1737591070011387&usg=AOvVaw1yO4noZ3ON80MbjLMob01s"
            >
              ATUALIZAMOS ESTE AVISO?
            </a>
          </span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c9">
            <a
              className="c1"
              href="https://www.google.com/url?q=https://chatgpt.com/%2311-como-nos-contatar-sobre-este-aviso&sa=D&source=editors&ust=1737591070011535&usg=AOvVaw3Pu_oOyEEER-Srr6AfrpES"
            >
              COMO NOS CONTATAR SOBRE ESTE AVISO?
            </a>
          </span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c9">
            <a
              className="c1"
              href="https://www.google.com/url?q=https://chatgpt.com/%2312-como-revisar-atualizar-ou-excluir-os-dados-que-coletamos-de-voc%25C3%25AA&sa=D&source=editors&ust=1737591070011697&usg=AOvVaw1knBjG2EHCUcRosGGm8WYq"
            >
              COMO REVISAR, ATUALIZAR OU EXCLUIR OS DADOS QUE COLETAMOS DE VOCÊ?
            </a>
          </span>
        </li>
      </ol>
      <hr />
      <p className="c11">
        <span className="c0" />
      </p>
      <h3 className="c10" id="h.efef8wedd1iz">
        <span className="c3">1. O QUE COLETAMOS?</span>
      </h3>
      <p className="c2">
        <span className="c5">
          Informações pessoais que você nos fornece
          <br />
        </span>
        <span className="c0">
          &nbsp;Coletamos informações pessoais que você fornece voluntariamente ao
          se registrar nos Serviços, expressar interesse em obter informações sobre
          nós ou nossos produtos e Serviços, quando você participa de atividades nos
          Serviços ou quando entra em contato conosco.
        </span>
      </p>
      <p className="c2">
        <span className="c0">As informações pessoais coletadas podem incluir:</span>
      </p>
      <ul className="c7 lst-kix_u8ht4jcq72jm-0 start">
        <li className="c2 c6 li-bullet-0">
          <span className="c0">Nomes</span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c0">Endereços de e-mail</span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c0">Endereços de correspondência</span>
        </li>
      </ul>
      <p className="c2">
        <span className="c5">
          Informações sensíveis
          <br />
        </span>
        <span className="c0">&nbsp;Não processamos informações sensíveis.</span>
      </p>
      <p className="c2">
        <span className="c5">
          Dados de login social
          <br />
        </span>
        <span className="c0">
          &nbsp;Caso você opte por registrar-se utilizando suas credenciais de uma
          rede social (como Facebook ou X), coletaremos certas informações de perfil
          dessa rede social, conforme descrito na seção "COMO GERENCIAMOS SEUS
          LOGINS SOCIAIS?"
        </span>
      </p>
      <p className="c2">
        <span className="c5">
          Google API
          <br />
        </span>
        <span className="c0">
          &nbsp;Nosso uso das informações recebidas da Google API seguirá a Política
          de Privacidade dos Serviços da API Google, incluindo os requisitos de uso
          limitado.
        </span>
      </p>
      <hr />
      <p className="c11">
        <span className="c0" />
      </p>
      <h3 className="c10" id="h.84e2madkw854">
        <span className="c3">2. COMO PROCESSAMOS SUAS INFORMAÇÕES?</span>
      </h3>
      <p className="c2">
        <span className="c0">
          Processamos suas informações para várias finalidades, incluindo:
        </span>
      </p>
      <ul className="c7 lst-kix_l9gtl89zihc5-0 start">
        <li className="c2 c6 li-bullet-0">
          <span className="c0">
            Facilitar a criação e autenticação de contas e gestão de contas de
            usuário.
          </span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c0">
            Fornecer e facilitar a entrega dos serviços solicitados.
          </span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c0">Permitir a comunicação entre usuários.</span>
        </li>
      </ul>
      <hr />
      <p className="c11">
        <span className="c0" />
      </p>
      <h3 className="c10" id="h.fr1ho6bpzb2e">
        <span className="c3">
          3. QUANDO E COM QUEM COMPARTILHAMOS SUAS INFORMAÇÕES PESSOAIS?
        </span>
      </h3>
      <p className="c2">
        <span className="c0">
          Podemos compartilhar suas informações nas seguintes situações:
        </span>
      </p>
      <ul className="c7 lst-kix_1iiayrqsingt-0 start">
        <li className="c2 c6 li-bullet-0">
          <span className="c5">Transferências de negócios</span>
          <span className="c0">
            : Podemos compartilhar suas informações em negociações de fusão, venda
            de ativos ou aquisição de parte ou totalidade do nosso negócio.
          </span>
        </li>
        <li className="c2 c6 li-bullet-0">
          <span className="c5">Outros usuários</span>
          <span className="c0">
            : Se você interagir publicamente com outras pessoas nos Serviços, suas
            informações podem ser visualizadas por todos os usuários.
          </span>
        </li>
      </ul>
      <hr />
      <p className="c11">
        <span className="c0" />
      </p>
      <h3 className="c10" id="h.jny4fwey6ahy">
        <span className="c3">
          4. USAMOS COOKIES E OUTRAS TECNOLOGIAS DE RASTREAMENTO?
        </span>
      </h3>
      <p className="c2">
        <span className="c0">
          Sim, utilizamos cookies e outras tecnologias de rastreamento para coletar
          e armazenar informações, tais como preferências do usuário e dados de
          navegação.
        </span>
      </p>
      <hr />
      <p className="c11">
        <span className="c0" />
      </p>
      <h3 className="c10" id="h.v6ga1duqgy6j">
        <span className="c3">5. COMO GERENCIAMOS SEUS LOGINS SOCIAIS?</span>
      </h3>
      <p className="c2">
        <span className="c0">
          Se você optar por se registrar ou fazer login usando uma conta de mídia
          social, coletaremos informações do seu perfil, como nome e e-mail.
        </span>
      </p>
      <hr />
      <p className="c11">
        <span className="c0" />
      </p>
      <h3 className="c10" id="h.9biwtlhf7zr1">
        <span className="c3">6. POR QUANTO TEMPO MANTEMOS SUAS INFORMAÇÕES?</span>
      </h3>
      <p className="c2">
        <span className="c0">
          Manteremos suas informações pelo tempo necessário para cumprir os
          objetivos descritos neste Aviso de Privacidade, a menos que um período de
          retenção maior seja exigido ou permitido por lei.
        </span>
      </p>
      <hr />
      <p className="c11">
        <span className="c0" />
      </p>
      <h3 className="c10" id="h.qz4cob9wf1d2">
        <span className="c3">7. COLETAMOS INFORMAÇÕES DE MENORES?</span>
      </h3>
      <p className="c2">
        <span className="c0">
          Não coletamos, solicitamos ou comercializamos informações de crianças
          menores de 18 anos.
        </span>
      </p>
      <hr />
      <p className="c11">
        <span className="c0" />
      </p>
      <h3 className="c10" id="h.hn5xd93kuo3i">
        <span className="c3">8. QUAIS SÃO SEUS DIREITOS DE PRIVACIDADE?</span>
      </h3>
      <p className="c2">
        <span className="c0">
          Você tem o direito de revisar, alterar ou encerrar sua conta, dependendo
          das leis do seu país de residência.
        </span>
      </p>
      <hr />
      <p className="c11">
        <span className="c0" />
      </p>
      <h3 className="c10" id="h.l41t7tcua5c2">
        <span className="c3">9. CONTROLES PARA RECURSOS "DO-NOT-TRACK"</span>
      </h3>
      <p className="c2">
        <span className="c0">
          A maioria dos navegadores da web inclui um recurso Do-Not-Track (DNT), mas
          atualmente não seguimos esse sinal.
        </span>
      </p>
      <hr />
      <p className="c11">
        <span className="c0" />
      </p>
      <h3 className="c10" id="h.d6nnf0qxb9ni">
        <span className="c3">10. ATUALIZAMOS ESTE AVISO?</span>
      </h3>
      <p className="c2">
        <span className="c0">
          Sim, atualizaremos este Aviso conforme necessário para manter conformidade
          com as leis relevantes.
        </span>
      </p>
      <hr />
      <p className="c11">
        <span className="c0" />
      </p>
      <h3 className="c10" id="h.fvhwe06ko2kf">
        <span className="c3">11. COMO NOS CONTATAR SOBRE ESTE AVISO?</span>
      </h3>
      <p className="c2">
        <span className="c0">
          Se você tiver dúvidas sobre este Aviso, entre em contato conosco pelo
          e-mail thivieiratav@gmail.com.
        </span>
      </p>
      <hr />
      <p className="c11">
        <span className="c0" />
      </p>
      <h3 className="c10" id="h.yaw60tpfafwv">
        <span className="c3">
          12. COMO REVISAR, ATUALIZAR OU EXCLUIR OS DADOS QUE COLETAMOS DE VOCÊ?
        </span>
      </h3>
      <p className="c2">
        <span className="c0">
          Você pode revisar, atualizar ou excluir suas informações pessoais entrando
          em contato conosco ou enviando uma solicitação de acesso aos dados.
        </span>
      </p>
      <hr />
      <p className="c11">
        <span className="c0" />
      </p>
      <p className="c2">
        <span className="c0">
          Essa versão organizada facilita a leitura e compreensão dos pontos
          principais sobre o tratamento de dados pessoais.
        </span>
      </p>
      <div className="mt-10">
        <Link href="/" className="w-48 px-4 py-2 font-sans font-semibold text-center text-black bg-white rounded-md text-md hover:bg-gray-200">{t("go_back_home", "Go back home")}</Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
