import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TesteComponent } from '@components/teste/teste.component';
import { PerfilComponent } from "./pages/perfil/perfil.component";
import { ConhecimentosComponent } from './pages/conhecimentos/conhecimentos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TesteComponent,
    PerfilComponent,
    ConhecimentosComponent
  ],
  templateUrl: "app.component.html"
})
export class AppComponent {
}
