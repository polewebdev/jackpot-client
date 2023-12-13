import { Component, Input, OnInit} from '@angular/core';
import { centerElements, leftElements, rightElements } from '../models/elements.model';
import { ElementsServices } from '../services/elements.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit{

  leftStopIndex: number = 0
  centerStopIndex: number = 0
  rightStopIndex: number = 0
  private readonly spinDuration = 4000
  isSpinning: boolean = false;
  leftelements: leftElements[] = []
  rightelements: rightElements[] = []
  centerelements: centerElements[] = []
  displayElements: (rightElements | centerElements | leftElements)[] = []

  constructor(private elementService: ElementsServices) {
    this.leftelements = this.elementService.getLeftElements()
    this.centerelements = this.elementService.getCenterElements()
    this.rightelements = this.elementService.getRightElements()

    this.displayElements = [...this.leftelements, ...this.centerelements, ...this.rightelements]
  }

  ngOnInit(): void {

  }

  startAnimation(): void {
    if (!this.isSpinning) {
      this.isSpinning = true

      this.leftStopIndex = this.getRandomIndex(this.leftelements.length)
      this.centerStopIndex = this.getRandomIndex(this.centerelements.length)
      this.rightStopIndex = this.getRandomIndex(this.rightelements.length)

      const leftDelay = Math.floor(Math.random() * this.spinDuration)
      const centerDelay = Math.floor(Math.random() * this.spinDuration)
      const rightDelay = Math.floor(Math.random() * this.spinDuration)

      setTimeout(() => {
        this.isSpinning = false;
      }, Math.max(leftDelay, centerDelay, rightDelay) + 500);

      setTimeout(() => {
        this.resetAnimation();
      }, this.spinDuration);
    }
  }

  private resetAnimation(): void {
    this.leftStopIndex = 0
    this.centerStopIndex = 0
    this.rightStopIndex = 0
  }

  private getRandomIndex(max: number): number {
    return Math.floor(Math.random() * max);
  }


  shuffle(array: any[]): any[] {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array;
  }
}
