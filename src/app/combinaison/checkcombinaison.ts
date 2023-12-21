import { centerElements, gainElementLeft, gainElementRight, leftElements, rightElements } from '../models/elements.model';

export class Combinaisons {
    checkCombinaisons(leftelements: leftElements[],
        centerelements: centerElements[],
        rightelements: rightElements[], image: string): boolean {
        return (
            (leftelements[0].imageURL === image &&
            centerelements[0].imageURL === image &&
            rightelements[0].imageURL === image) ||

            (leftelements[1].imageURL === image &&
            centerelements[1].imageURL === image &&
            rightelements[1].imageURL === image) ||

            (leftelements[2].imageURL === image &&
            centerelements[2].imageURL === image &&
            rightelements[2].imageURL === image) ||

            (leftelements[0].imageURL === image &&
            centerelements[2].imageURL === image &&
            rightelements[1].imageURL === image) ||

            (leftelements[2].imageURL === image &&
            centerelements[0].imageURL === image &&
            rightelements[1].imageURL === image)
        )
    }
}