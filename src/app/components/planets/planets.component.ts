import { Component } from '@angular/core';
import { PlanetService } from '../../services/planet.service';
import { Planet } from '../../interfaces/planet';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.css'
})
export class PlanetsComponent {
  planets: Planet[];

  constructor(private planetService: PlanetService) {
    this.planets = this.planetService.getAllPlanets();
  }
}
