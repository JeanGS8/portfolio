import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { IConhecimentos } from 'app/interfaces/IConhecimentos.interface';
import { IProjetos } from 'app/interfaces/IProjetos.interface';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent {
  public conhecimentos = signal<IConhecimentos[]>([]);
  
  @Input() set inputConhecimentos(conhecimentos: IConhecimentos[]) {
    this.conhecimentos.set(conhecimentos);
  }

  public projetos = signal<IProjetos[]>([]);

  @Input() set inputProjetos(projetos: IProjetos[]){
    this.projetos.set(projetos);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // Conhecimentos
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });

      $('.slider-nav').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
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
              slidesToShow: 1,
            }
          }
        ]
      });
      
      // Projetos
      $('.single-item').slick();

      $('.single-mini').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500
      });
    }, 150);
  }
}
