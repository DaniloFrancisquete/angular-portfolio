import { Component, signal } from '@angular/core';
import { IEpxperiences } from '../../interface/IEpxperiences';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {


  public arrayExperiences = signal<IEpxperiences[]> ([
    {
      summary: {
        strong: "Fullstack Developer",
        p: "CodeExpress | abr 2023 - Present",
      },
      text: "<p>Deste de 2023, atuo como especialista em Java, Python, Angular, AngularJS, ReactJS, NextJS, .NET, Redux e Docker. Experiência em desenvolvimento de aplicações web completas, desde o front-end até o back-end, com foco em performance, segurança e escalabilidade. Habilidade em colaborar com equipes multidisciplinares para entregar soluções inovadoras e eficientes. Apaixonado por tecnologia e sempre em busca de novos desafios e aprendizado contínuo.</p>"
    },
    {
      summary: {
        strong: "Gerente Geral",
        p: "Juliana Modas | mai 2015 - out 2023",
      },
      text: "<p>Planeja, organiza e controla as rotinas de comércios, envolvendo a liderança de equipes, gestão de estoque e programação de compras. Acompanha o fechamento de caixa, faturamento e indicadores de resultados para alcance dos objetivos organizacionais.Fazer a gestão e contabilidade geral da loja.</p>"
    },
    {
      summary: {
        strong: "Auxiliar Administrativo",
        p: "Usina Alto Alegre S/A | mai 2009 - mar 2016",
      },
      text: "<p>Assegurar que o material adequado esteja, na quantidade devida, no local certo, quando necessário Impedir que exista divergência de inventário e perda de qualquer natureza.Preservar a qualidade e as quantidades exatas.Possuir instalações adequadas e recursos de movimentação e distribuição suficientes a um atendimento rápido e eficiente</p>"
    },
  ]);

}
