import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {NgxPageScrollModule} from "ngx-page-scroll";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgxPageScrollModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
}
