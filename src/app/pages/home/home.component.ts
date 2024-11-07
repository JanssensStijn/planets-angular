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

  curentFunFact: string = "Earth is the only planet known to support life.";

  funFacts : string[] = [
    "Earth is the only planet not named after a god.",
    "Earth has a powerful magnetic field.",
    "Earth was once believed to be the center of the universe.",
    "Earth has a very powerful magnetic field.",
    "Earth is the only planet known to support life.",
    "Earth is the densest planet in the Solar System.",
    "Earth is the only planet that wasn't named after a Greek or Roman god or goddess.",
    "Earth is the only planet in the Solar System with plate tectonics.",
    "Earth is the only planet in the Solar System with liquid water on its surface.",
    "Earth is the only planet known to support life."
  ];

  loadNewFunFact(): void{
    let randomIndex = Math.floor(Math.random() * (this.funFacts.length -1));
    this.curentFunFact= this.funFacts.filter(fact => fact !== this.curentFunFact)[randomIndex];
  }

}
