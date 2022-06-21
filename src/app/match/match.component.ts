import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Building } from '../building';

@Component({
  selector: 'app-round',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css'],
  providers: [DataService]
})

export class RoundComponent implements OnInit {
  
  rightBuilding: Building = new Building(); //сущность для правильного варианта в раунде викторины
  buildings: Building[];
  buildingCount: number = 4; 
  rightBuildingImage: string = '';

  currentAnswer: string;
  matchScore: number = 0;
  roundEnded: boolean = false;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
      this.loadRandomBuilding();
  }

  loadRandomBuilding() {
    this.dataService.getRandomBuildings(this.buildingCount)
      .subscribe((data: Building[]) => {
        this.buildings = data
        this.rightBuilding = this.buildings[Math.floor(Math.random() * this.buildingCount)]
        this.rightBuildingImage = `assets/img/${this.rightBuilding.id}.jpg`
        this.currentAnswer = ""
        this.roundEnded = false;
      })
  }
  
  selectAnswer(buildingName: string) {
    this.currentAnswer = buildingName;
    this.checkAnswer();
    this.roundEnded = true;
  }

  checkAnswer() {
    if (this.currentAnswer == this.rightBuilding.name) {
      this.matchScore++;
    }
    else {
      this.matchScore = 0;
    }
  }

  printBuildingInfo(): string {
    return `${this.rightBuilding.name}
            ${this.rightBuilding.date}
            ${this.rightBuilding.architector}
            ${this.rightBuilding.customer}
            ${this.rightBuilding.style}`;
  }
}