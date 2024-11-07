import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  planet = {
    name: "EARTH",
    nickname: "The Blue Planet",
    description: "Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth's surface is land consisting of continents and islands.",
    imgUrl: "img/earth.png",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Earth"
};
}
