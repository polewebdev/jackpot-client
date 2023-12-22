import { Component, Input, OnInit} from '@angular/core';
import { centerElements, gainElementLeft, gainElementRight, leftElements, rightElements } from '../models/elements.model';
import { ElementsServices } from '../services/elements.service';
import { Combinaisons } from '../combinaison/checkcombinaison';

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
  private isAnimationInProgress: boolean = false
  private elapsedTime: number = 0
  private intervalID: any
  private totalTime: number = 7000
  private isAnimationStarted: boolean = false
  gainelementright: gainElementRight[] = []
  gainelementleft: gainElementLeft[] = []
  leftelements: leftElements[] = []
  centerelements: centerElements[] = []
  rightelements: rightElements[] = []
  displayElements: (rightElements | centerElements | leftElements)[] = []

  constructor(private elementService: ElementsServices, private checkcombinaison: Combinaisons) {
    this.leftelements = this.elementService.getLeftElements()
    this.centerelements = this.elementService.getCenterElements()
    this.rightelements = this.elementService.getRightElements()
    this.gainelementright = this.elementService.getGainElementRight()
    this.gainelementleft = this.elementService.getGainElementLeft()
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

  checkCombinations(): void {
    const combinations = [
      { image: '../../assets/citron.png', points: 2000 },
      { image: '../../assets/cerise.png', points: 1000 },
      { image: '../../assets/bar.png', points: 100000 },
      { image: '../../assets/cloche.png', points: 3000 },
      { image: '../../assets/coeur.png', points: 5000 },
      { image: '../../assets/sept.png', points: 1000000 },
      { image: '../../assets/pièce.png', points: 500000 },
      { image: '../../assets/raisin.png', points: 4000 },
      { image: '../../assets/violet.png', points: 6000 },
      { image: '../../assets/fer.png', points: 7000 }
    ]

    for (const combination of combinations) {
      const isCombination = this.checkcombinaison.checkCombinaisons(
        this.leftelements,
        this.centerelements,
        this.rightelements,
        combination.image
      )

      if (isCombination) {
        this.slotNumbersElement += combination.points
      }
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
        this.checkCombinations()
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
    const leftDelay = 2000
    const centerDelay = 3000
    const rightDelay = 4000

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
      this.isAnimationInProgress = false
    }, leftDelay + centerDelay + rightDelay);
    
    this.isAnimationInProgress = true
    this.isAnimationStarted = true
    if (this.isAnimationStarted) {
      this.initializeAnimation()
    }
  // this.slotNumbersElement -= 10
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
    setTimeout(() => {
      clearInterval(this.intervalID)
      this.checkCombinations()
      this.elapsedTime = 0
    }, this.totalTime)
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
