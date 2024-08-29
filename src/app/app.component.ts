import { Component } from '@angular/core';
import { PerfilComponent } from "./pages/perfil/perfil.component";
import { ConhecimentosComponent } from './pages/conhecimentos/conhecimentos.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { FooterComponent } from '@components/footer/footer.component';
import { NavbarComponent } from '@components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    PerfilComponent,
    ConhecimentosComponent,
    ProjetosComponent,
    FooterComponent
  ],
  templateUrl: "app.component.html"
})
export class AppComponent {
}
