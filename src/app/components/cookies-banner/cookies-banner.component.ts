
import { Component } from '@angular/core';

@Component({
  selector: 'app-cookies-banner',
  standalone: true,
  imports: [],
  templateUrl: './cookies-banner.component.html',
  styleUrl: './cookies-banner.component.css'
})
export class CookiesBannerComponent {
  setCookie(name: string, value: string, days: number): void {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }
  
  getCookie(name: string): string | null {
      const nameEQ = name + "=";
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
  }
  
  acceptCookies(): void {
      this.setCookie('cookiesAccepted', 'true', 365);
  }
  
  areCookiesAccepted(): boolean {
      return this.getCookie('cookiesAccepted') === 'true';
  }
}
