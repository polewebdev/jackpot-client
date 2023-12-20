import { Injectable } from "@angular/core";
import { elementsArray } from "../elementsarray/elements.array";
import { centerElements, gainElementLeft, gainElementRight, leftElements, rightElements } from "../models/elements.model";

@Injectable ({
    providedIn: 'root'
})

export class ElementsServices {
    private elementsArray: elementsArray = new elementsArray();

    getLeftElements(): leftElements[] {
        return this.elementsArray.left_elements
    }

    getCenterElements(): centerElements[] {
        return this.elementsArray.center_elements
    }

    getRightElements(): rightElements[] {
        return this.elementsArray.right_elements
    }

    getGainElementRight(): gainElementRight[] {
        return this.elementsArray.gainElementRight
    }

    getGainElementLeft(): gainElementLeft[] {
        return this.elementsArray.gainElementLeft
    }
}