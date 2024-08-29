import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CarouselComponent } from '@components/carousel/carousel.component';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, CarouselComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjetosComponent {
  public projetos = signal([
    {
      "title": "Stream-finder",
      "overview": "Foi um projeto de faculdade realizado em grupo para o semestre mobile. O aplicativo facilita a busca por filmes e séries, ajudando os usuários a encontrarem plataformas para assistir, oferecendo uma interface intuitiva e recursos de recomendação.",
      "link": "https://stream-finder-mu.vercel.app/",
      "github": "https://github.com/JeanGS8/stream-finder",
      "fotosJson": [
        "projetos/stream-finder/1.png",
        "projetos/stream-finder/2.png",
        "projetos/stream-finder/3.png",
        "projetos/stream-finder/4.png",
        "projetos/stream-finder/5.png",
        "projetos/stream-finder/6.png",
        "projetos/stream-finder/7.png"
      ]
    },
    {
      "title": "angular portfolio",
      "overview": "Durante o curso avançado de Angular 2 na Udemy, desenvolvi esse projeto. Utilizando TypeScript e as técnicas mais recentes do Angular, criei um portfólio dinâmico e moderno.",
      "link": 'https://angular-portfolio-rose.vercel.app/',
      "github": "https://github.com/JeanGS8/angular-portfolio",
      "fotosJson": [
        "projetos/angular-portfolio/1.png",
        "projetos/angular-portfolio/2.png"
      ]
    },
    {
      "title": "Blog Pessoal Front-end",
      "overview": "Construído em React, é o front-end de uma plataforma de blog que permite aos usuários criar contas, gerenciar temas e postagens, proporcionando uma experiência intuitiva e eficiente.",
      "link": "http://blog-pessoal-eight.vercel.app/",
      "github": "https://github.com/JeanGS8/blogpessoal-front",
      "fotosJson": [
        "projetos/blog-front/1.jpeg",
        "projetos/blog-front/2.jpeg",
        "projetos/blog-front/3.jpeg",
        "projetos/blog-front/4.jpeg"
      ]
    },
    {
      "title": "Blog Pessoal Back-end",
      "overview": "O back-end da plataforma de blog foi desenvolvido com NestJS, permitindo aos usuários criar contas, gerenciar temas e postagens, proporcionando uma experiência intuitiva e eficiente.",
      "link": '',
      "github": "https://github.com/JeanGS8/blog-back",
      "fotosJson": [
        "projetos/blog-back/1.jpeg",
        "projetos/blog-back/2.jpeg"
      ]
    },
    {
      "title": "Pokedex",
      "overview": "A Pokedex, desenvolvida em Next.js, é uma ferramenta simples que mostra informações básicas de Pokémon das primeiras duas gerações. Com foco nos tipos, altura e peso de cada Pokémon, oferece uma visão direta e útil para os usuários.",
      "link": "https://pokedex-jeangs8.vercel.app/",
      "github": "https://github.com/JeanGS8/pokedex",
      "fotosJson": [
        "projetos/pokedex/1.jpeg",
        "projetos/pokedex/2.jpeg",
        "projetos/pokedex/3.jpeg",
        "projetos/pokedex/4.jpeg",
        "projetos/pokedex/5.jpeg"
      ]
    },
    {
      "title": "Estudos com cronômetro",
      "overview": "É uma aplicação minimalista que permite cadastrar tarefas, estimar o tempo de conclusão e iniciar um cronômetro, sem necessidade de banco de dados, sendo uma solução simples e eficaz para gerenciar o tempo de estudo.",
      "link": "https://jeangs8.github.io/alura-studies-react/",
      "github": "https://github.com/JeanGS8/alura-studies-react",
      "fotosJson": [
        "projetos/alura-studies/1.jpeg"
      ]
    }
  ]);
}
