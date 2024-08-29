import { CommonModule } from '@angular/common';
import "slick-carousel";
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CarouselComponent } from '@components/carousel/carousel.component';

@Component({
  selector: 'app-conhecimentos',
  standalone: true,
  imports: [CommonModule, CarouselComponent],
  templateUrl: './conhecimentos.component.html',
  styleUrl: './conhecimentos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConhecimentosComponent {

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
}
