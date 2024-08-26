import { CommonModule } from '@angular/common';
import "slick-carousel";
import { AfterViewInit, ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-conhecimentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conhecimentos.component.html',
  styleUrl: './conhecimentos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConhecimentosComponent implements AfterViewInit {

  public imgs = signal([
    {
      "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "alt": "Javascript"
    },
    {
      "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "alt": "Typescript"
    },
    {
      "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "alt": "Node.js"
    },
    {
      "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      "alt": "Express"
    },
    {
      "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
      "alt": "Nest.js"
    },
    {
      "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
      "alt": "Angular"
    },
    {
      "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      "alt": "Bootstrap"
    },
    {
      "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swiper/swiper-original.svg",
      "alt": "Swiper"
    },
    {
      "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg",
      "alt": "Ionic"
    },
    {
      "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "alt": "React"
    },
    {
      "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      "alt": "Redux"
    },
    {
      "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
      "alt": "Material UI"
    }
  ]);

  ngAfterViewInit(): void {
    $('.autoplay').slick({
      autoplay: true,
      autoplaySpeed: 1500,
      infinite: true,
      arrows: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            autoplaySpeed: 1000,
            arrows: false,
            slidesToShow: 2,
          }
        }
      ]
    })
  }
}
