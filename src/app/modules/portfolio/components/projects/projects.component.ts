import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  public arrayProjects = signal <IProjects[]> ([
    {
      src: 'assets/img/projects/cardapio.png',
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
  ]);
}
