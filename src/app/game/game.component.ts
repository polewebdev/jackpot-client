import { Component, Input, OnInit } from '@angular/core';
import { Elements } from '../models/elements.model';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {

  elements: Elements[] = [
    {
        id: 1,
        imageURL: "../../assets/bar.png"
    },
    {
        id: 2,
        imageURL: '../../assets/citron.png'
    },
    {
        id: 3,
        imageURL: '../../assets/cerise.png'
    },
    {
        id: 4,
        imageURL: '../../assets/cloche.png'
    },
    {
      id: 5,
      imageURL: '../../assets/raisin.png'
    },
    {
      id: 6,
      imageURL: '../../assets/fer.png'
    },
    {
      id: 7,
      imageURL: '../../assets/pièce.png'
    },
    {
      id: 8,
      imageURL: '../../assets/sept.png'
    },
    {
      id: 9,
      imageURL: '../../assets/violet.png'
    },
    {
      id: 10,
      imageURL: '../../assets/coeur.png'
    },
  ]

  displayElements: Elements[] = []

  private elapsedTime: number = 0
  private intervalID: any
  private totalTimes: number = 7000

  moveElements(): void {
    const lastElement = this.elements.pop()
    if (lastElement) {
      this.elements.unshift(lastElement)
    }

    this.elapsedTime += 700
    if (this.elapsedTime >= this.totalTimes) {
      clearInterval(this.intervalID)
    }
  }

  startAnimation(): void {
    this.stopAnimation()

    this.elements = this.elements.slice(0, 3)
    this.shuffleArray(this.elements)
    this.intervalID = setInterval(() => {
      this.moveElements();
    }, 100)
  }

  stopAnimation(): void {
    clearInterval(this.intervalID)
    this.elapsedTime = 0
  }

  private shuffleArray(array: any): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
  }
}
