import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  showHelp: boolean = false

  constructor() {}

  ngOnInit(): void {
    
  }

  forHelp(): void {
    this.showHelp = !this.showHelp
  }
}
