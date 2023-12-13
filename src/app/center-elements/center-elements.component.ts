import { Component, OnInit } from '@angular/core';
import { centerElements } from '../models/elements.model';
import { ElementsServices } from '../services/elements.service';

@Component({
  selector: 'app-center-elements',
  templateUrl: './center-elements.component.html',
  styleUrls: ['./center-elements.component.scss'],
})
export class CenterElementsComponent  implements OnInit {
  centerElements: centerElements[] = []

  constructor(private arrayservice: ElementsServices) { }

  ngOnInit(): void {
    this.centerElements = this.arrayservice.getCenterElements()
  }

}
