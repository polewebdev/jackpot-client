import { centerElements, gainElementRight, gainElementLeft, leftElements } from "../models/elements.model"
import { rightElements } from "../models/elements.model"

export class elementsArray {
    left_elements: leftElements[] = [
        {
            id: 1,
            imageURL: "../../assets/sept.png"
        },
        {
            id: 2,
            imageURL: '../../assets/bar.png'
        },
        {
            id: 3,
            imageURL: '../../assets/cloche.png'
        },
        {
            id: 4,
            imageURL: '../../assets/cerise.png'
        },
        {
          id: 5,
          imageURL: '../../assets/bar.png'
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
          imageURL: '../../assets/citron.png'
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
      right_elements: rightElements[] = [
        {
            id: 1,
            imageURL: "../../assets/fer.png"
        },
        {
            id: 2,
            imageURL: '../../assets/citron.png'
        },
        {
            id: 3,
            imageURL: '../../assets/cloche.png'
        },
        {
            id: 4,
            imageURL: '../../assets/cerise.png'
        },
        {
          id: 5,
          imageURL: '../../assets/raisin.png'
        },
        {
          id: 6,
          imageURL: '../../assets/bar.png'
        },
        {
          id: 7,
          imageURL: '../../assets/pièce.png'
        },
        {
          id: 8,
          imageURL: '../../assets/violet.png'
        },
        {
          id: 9,
          imageURL: '../../assets/coeur.png'
        },
        {
          id: 10,
          imageURL: '../../assets/sept.png'
        },
      ]
      center_elements: centerElements[] = [
        {
            id: 1,
            imageURL: "../../assets/raisin.png"
        },
        {
            id: 2,
            imageURL: '../../assets/fer.png'
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
          imageURL: '../../assets/bar.png'
        },
        {
          id: 6,
          imageURL: '../../assets/citron.png'
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
          imageURL: '../../assets/coeur.png'
        },
        {
          id: 10,
          imageURL: '../../assets/violet.png'
        },
      ]
      gainElementLeft: gainElementLeft[] = [
        {
          id: 1,
          imageURL: '../../assets/bar.png',
          gain: 'x3 100 000 JETONS'
        },
        {
          id: 2,
          imageURL: '../../assets/cerise.png',
          gain: 'x3 1 000 JETONS'
        },
        {
          id: 3,
          imageURL: '../../assets/citron.png',
          gain: 'x3 2 000 JETONS'
        },
        {
          id: 4,
          imageURL: '../../assets/cloche.png',
          gain: 'x3 3 000 JETONS'
        },
        {
          id: 5,
          imageURL: '../../assets/coeur.png',
          gain: 'x3 4 000 JETONS'
        },
      ]
      gainElementRight: gainElementRight[] = [
        {
          id: 1,
          imageURL: '../../assets/sept.png',
          gain: 'x3 1 000 000 JETONS'
        },
        {
          id: 2,
          imageURL: '../../assets/pièce.png',
          gain: 'x3 500 000 JETONS'
        },
        {
          id: 3,
          imageURL: '../../assets/raisin.png',
          gain: 'x3 5 000 JETONS'
        },
        {
          id: 4,
          imageURL: '../../assets/violet.png',
          gain: 'x3 6 000 JETONS'
        },
        {
          id: 5,
          imageURL: '../../assets/fer.png',
          gain: 'x3 7 000 JETONS'
        },
      ]
}