import { Component } from '@angular/core';

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {
  showingPassword : boolean = false;

  toggleShowingPassword(): void {
    this.showingPassword = !this.showingPassword;
  }
}
