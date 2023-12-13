import { Component, OnInit } from '@angular/core';
import { rightElements } from '../models/elements.model';
import { ElementsServices } from '../services/elements.service';

@Component({
  selector: 'app-right-elements',
  templateUrl: './right-elements.component.html',
  styleUrls: ['./right-elements.component.scss'],
})
export class RightElementsComponent  implements OnInit {
  rightelements: rightElements[] = []

  constructor(private arrayservice: ElementsServices) { }

  ngOnInit(): void {
    this.rightelements = this.arrayservice.getRightElements()
  }

}
