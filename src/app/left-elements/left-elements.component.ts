import { Component, OnInit } from '@angular/core';
import { leftElements } from '../models/elements.model';
import { ElementsServices } from '../services/elements.service';

@Component({
  selector: 'app-left-elements',
  templateUrl: './left-elements.component.html',
  styleUrls: ['./left-elements.component.scss'],
})
export class LeftElementsComponent  implements OnInit {

  leftelements: leftElements[] = []
  constructor(private arrayservice: ElementsServices) { }

  ngOnInit(): void {
    this.leftelements = this.arrayservice.getLeftElements()
  }

}
