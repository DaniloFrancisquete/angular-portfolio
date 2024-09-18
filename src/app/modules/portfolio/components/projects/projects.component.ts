import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog = inject(MatDialog)

  public arrayProjects = signal <IProjects[]> ([
    {
      src: 'assets/img/projects/hamburgue.png',
      alt: 'Projeto Hamburgueria',
      title: 'Projeto Hamburgueria',
      width: '100px',
      height: '51px',
      discription:
      '<p>Projeto de uma hamburgueria utilizando html,css,tailwindCss,javasScript</p>',
      links: [
        {
          name: 'Conheça meu Projeto',
          href: 'https://cardapio-two-self.vercel.app/',
        },
      ],
    },

    {
      src: 'assets/img/projects/code.png',
      alt: 'Empresa CodeEpress',
      title: 'Code Express - Soluções em TI',
      width: '100px',
      height: '51px',
      discription:
      '<p>Desenvolvi o site da Code Express utilizando Angular como framework principal para criar uma interface de usuário responsiva e dinâmica. Utilize o Angular Material para implementar componentes elegantes e funcionais, enquanto o Bootstrap foi integrado para melhorar a responsividade em dispositivos móveis. A combinação dessas tecnologias permitiu criar uma experiência de usuário moderna e otimizada, destacando serviços tecnológicos e soluções de TI de forma clara e eficiente</p>',
      links: [
        {
          name: 'Conheça meu Projeto',
          href: 'https://www.codeexpress.net/',
        },
      ],
    },



    {
      src: 'assets/img/projects/crud.png',
      alt: 'CRUD - Produtos',
      title: 'CRUD de Produtos - Angular',
      width: '100px',
      height: '51px',
      discription:
      '<p>Desenvolvi um sistema CRUD (Create, Read, Update, Delete) para gerenciamento de produtos utilizando Angular. O projeto inclui autenticação e integração com uma API RESTful. Utilizei Angular Material para implementar componentes de interface do usuário, criando um design moderno e intuitivo. Além disso, foram aplicados conceitos de responsividade e otimização de layout com CSS avançado e Bootstrap, proporcionando uma experiência de usuário consistente em diversos dispositivos.</p>',
      links: [
        {
          name: 'Conheça meu Projeto',
          href: 'https://crud-produtos-nu.vercel.app/login',
        },
      ],
    },

    {
      src: 'assets/img/projects/hero.webp',
      alt: 'Projeto Tarefas',
      title: 'Estudo Beta - Plataforma Educacional',
      width: '100px',
      height: '51px',
      discription:
      '<p>Desenvolvi a plataforma Estudo Beta utilizando Next.js para oferecer uma aplicação web rápida e eficiente, focada em experiência do usuário. A interface foi estilizada com Tailwind CSS, garantindo um design moderno e responsivo. Usei JavaScript para adicionar interatividade e funcionalidades avançadas, criando uma plataforma educacional funcional e acessível, hospedada na Vercel para garantir desempenho e disponibilidade.</p>',
      links: [
        {
          name: 'Conheça meu Projeto',
          href: 'https://estudo-beta.vercel.app/',
        },
      ],
    },

    {
      src: 'assets/img/projects/unnamed.png',
      alt: 'Projeto Todo-list',
      title: 'Todo-list - Gerenciador de Tarefas',
      width: '100px',
      height: '51px',
      discription:
      '<p>Desenvolvi um aplicativo Todo-list utilizando Angular, implementando um sistema completo de gerenciamento de tarefas. A interface do usuário foi criada com CSS avançado e Bootstrap, proporcionando um design limpo, moderno e responsivo. Isso garante uma experiência de usuário consistente em diversos dispositivos, facilitando o acompanhamento e organização das tarefas de maneira eficiente.</p>',
      links: [
        {
          name: 'Conheça meu Projeto',
          href: 'https://todo-list-16-beige.vercel.app/',
        },
      ],
    },

    {
      src: 'assets/img/projects/figma.png',
      alt: 'Projeto Vendas - Design de Interface',
      title: 'Projeto Vendas - Design de Interface',
      width: '100px',
      height: '51px',
      discription:
      '<p>Desenvolvi um design de interface para um sistema de vendas utilizando o Figma. O projeto focou em criar uma interface amigável e intuitiva, priorizando a experiência do usuário. Com um layout moderno e uma paleta de cores equilibrada, o design foi pensado para oferecer funcionalidade e acessibilidade, garantindo uma experiência fluida e profissional para os usuários finais.</p>',
      links: [
        {
          name: 'Conheça meu Projeto',
          href: 'https://www.figma.com/design/qKiiWsqhXKGdVGU3HGQGlY/Projeto-Vendas',
        },
      ],
    },

    {
      src: 'assets/img/projects/figma.png',
      alt: 'Redesign Netflix - Projeto de Interface',
      title: 'Redesign Netflix - Projeto de Interface',
      width: '100px',
      height: '51px',
      discription:
      '<p>Criei um redesign para a interface da Netflix utilizando o Figma, focando em melhorar a experiência do usuário com um layout mais moderno e acessível. O projeto apresenta uma reorganização da navegação e da disposição dos elementos para tornar a interface mais intuitiva e visualmente atraente. A paleta de cores e a tipografia foram cuidadosamente selecionadas para manter a identidade da marca, enquanto introduzem melhorias na usabilidade.</p>',
      links: [
        {
          name: 'Conheça meu Projeto',
          href: 'https://www.figma.com/design/IUsPBNKBWpGpJUCf2D5WO2/Redesign-Netflix?node-id=0-1&node-type=canvas',
        },
      ],
    },

    {
      src: 'assets/img/projects/figma.png',
      alt: 'Cardápio - Design de Interface',
      title: 'Cardápio - Design de Interface',
      width: '100px',
      height: '51px',
      discription:
      '<p>Desenvolvi um design de cardápio digital utilizando o Figma, focando em criar uma experiência visual atraente e fácil de navegar. O layout foi projetado para ser moderno e intuitivo, com uma organização clara das seções e itens. A escolha das cores e tipografia foi feita para destacar os pratos e bebidas, tornando o cardápio funcional e esteticamente agradável, ideal para restaurantes que buscam uma apresentação digital sofisticada.</p>',
      links: [
        {
          name: 'Conheça meu Projeto',
          href: 'https://www.figma.com/design/7hjEXQUpeVJ1ZIHCi3phvs/Cardapio?node-id=0-1&node-type=canvas',
        },
      ],
    },


  ]);

  public opneDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
