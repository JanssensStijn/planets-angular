import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  planets = [{
    name: "Jupiter",
    nickname: "The Gas Giant",
    description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.",
    imgUrl: "img/jupiter.png",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Jupiter"
  },
  {
      name: "Saturn",
      nickname: "The Ringed Planet",
      description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth.",
      imgUrl: "img/saturn.png",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Saturn"
  },
  {
      name: "Uranus",
      nickname: "The Ice Giant",
      description: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the grandfather of Zeus and father of Cronus.",
      imgUrl: "img/uranus.png",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Uranus"
  },
  {
      name: "Neptune",
      nickname: "The Ice Giant",
      description: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.",
      imgUrl: "img/neptune.png",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Neptune"
  },{
      name: "Earth",
      nickname: "The Blue Planet",
      description: "Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth's surface is land consisting of continents and islands.",
      imgUrl: "img/earth.png",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Earth"
  },
  {
      name: "Mars",
      nickname: "The Red Planet",
      description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. It is often referred to as the 'Red Planet' due to its reddish appearance.",
      imgUrl: "img/mars.png",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Mars"
  },
  {
      name: "Venus",
      nickname: "The Morning Star",
      description: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows.",
      imgUrl: "img/venus.png",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Venus"
  },
  {
      name: "Mercury",
      nickname: "The Swift Planet",
      description: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets.",
      imgUrl: "img/mercury.png",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Mercury_(planet)"
  }];

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
