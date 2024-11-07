import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CookiesBannerComponent } from './components/cookies-banner/cookies-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent, 
    RouterOutlet,
    CookiesBannerComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'planets';
}
