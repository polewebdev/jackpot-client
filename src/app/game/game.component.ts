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
  slotNumbersElement: number = 400000
  audio: HTMLAudioElement | null = null
  volume: number = 0.5
  centerStopIndex: number = 0
  rightStopIndex: number = 0
  showHelp: boolean = false
  showEarningsTable: boolean = false
  private elapsedTime: number = 0
  private intervalID: any
  private totalTime: number = 7000
  private isAnimationStarted: boolean = false
  leftelements: leftElements[] = []
  centerelements: centerElements[] = []
  rightelements: rightElements[] = []
  displayElements: (rightElements | centerElements | leftElements)[] = []

  constructor(private elementService: ElementsServices) {
    this.leftelements = this.elementService.getLeftElements()
    this.centerelements = this.elementService.getCenterElements()
    this.rightelements = this.elementService.getRightElements()
  }

  ngOnInit(): void {
    
  }

  isLeftSpinning: boolean = false
  isRightSpinning: boolean = false
  isCenterSpinning: boolean = false

  forHelp(): void {
    this.showHelp = !this.showHelp
  }

  forEarningsTable(): void {
    this.showEarningsTable = !this.showEarningsTable
  }

  checkCitronCombinaison(): void {
    const isCitronCombination = (
      (this.leftelements[0].imageURL === '../../assets/citron.png' &&
      this.centerelements[0].imageURL === '../../assets/citron.png' &&
      this.rightelements[0].imageURL === '../../assets/citron.png') ||

      (this.leftelements[1].imageURL === '../../assets/citron.png' &&
      this.centerelements[1].imageURL === '../../assets/citron.png' &&
      this.rightelements[1].imageURL === '../../assets/citron.png') ||

      (this.leftelements[2].imageURL === '../../assets/citron.png' &&
      this.centerelements[2].imageURL === '../../assets/citron.png' &&
      this.rightelements[2].imageURL === '../../assets/citron.png') ||

      (this.leftelements[0].imageURL === '../../assets/citron.png' &&
      this.centerelements[2].imageURL === '../../assets/citron.png' &&
      this.rightelements[1].imageURL === '../../assets/citron.png') ||

      (this.leftelements[2].imageURL === '../../assets/citron.png' &&
      this.centerelements[0].imageURL === '../../assets/citron.png' &&
      this.rightelements[1].imageURL === '../../assets/citron.png')
      );
      if (isCitronCombination) {
        console.log('Combinaison de citron détectée !');
      }
  }

  moveElements(): void {
    const lastElement = this.displayElements.pop()
    if (lastElement) {
      this.displayElements.unshift(lastElement)
    }
    this.elapsedTime += 700
    if (this.elapsedTime >= this.totalTime) {
        clearInterval(this.intervalID)
        this.checkCitronCombinaison()
      }
    }

  initializeAnimation(): void {
    this.shuffleArray(this.leftelements)
    this.shuffleArray(this.centerelements)
    this.shuffleArray(this.rightelements)
    this.displayElements = [...this.leftelements, ...this.centerelements, ...this.rightelements];

    this.intervalID = setInterval(() => {
      this.moveElements()
    }, 100);
  }

  startAnimation(): void {
    const leftDelay = Math.floor(Math.random() * 5000) + 2000
    const centerDelay = Math.floor(Math.random() * 5000) + 2000
    const rightDelay = Math.floor(Math.random() * 5000) + 2000

    this.isLeftSpinning = true
    setTimeout(() => {
      this.isLeftSpinning = false
    }, leftDelay);

    this.isCenterSpinning = true
    setTimeout(() => {
      this.isCenterSpinning = false
    }, centerDelay);

    this.isRightSpinning = true
    setTimeout(() => {
      this.isRightSpinning = false
    }, rightDelay);

    this.isAnimationStarted = true
    if (this.isAnimationStarted)
      this.initializeAnimation()
  }

  private shuffleArray(array: any): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
  }

  stopAnimation(): void {
    this.isLeftSpinning = false
    this.isCenterSpinning = false
    this.isRightSpinning = false
    clearInterval(this.intervalID)
    this.elapsedTime = 0
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

  playMusic(): void {
    if (this.audio && !this.audio.paused) {
      this.audio.volume = this.volume
      this.audio.pause()
      this.audio.currentTime = 0
    } else {
      this.audio = new Audio("../../assets/music.wav")
      this.audio.volume = this.volume
      this.audio.play()
    }
  }

  raiseVolume(): void {
    if (this.audio) {
      this.volume = Math.min(1, this.volume + 0.1)
      this.audio.volume = this.volume
    }
  }

  lowerVolume(): void {
    if (this.audio) {
      this.volume = Math.max(0, this.volume - 0.1)
      this.audio.volume = this.volume
    }
  }
}
