import { centerElements, gainElementLeft, gainElementRight, leftElements, rightElements } from '../models/elements.model';

export class Combinaisons {
    checkCitronCombinaisons(leftelements: leftElements[],
        centerelements: centerElements[],
        rightelements: rightElements[]): boolean {
        return (
          (leftelements[0].imageURL === '../../assets/citron.png' &&
          centerelements[0].imageURL === '../../assets/citron.png' &&
          rightelements[0].imageURL === '../../assets/citron.png') ||
    
          (leftelements[1].imageURL === '../../assets/citron.png' &&
          centerelements[1].imageURL === '../../assets/citron.png' &&
          rightelements[1].imageURL === '../../assets/citron.png') ||
    
          (leftelements[2].imageURL === '../../assets/citron.png' &&
          centerelements[2].imageURL === '../../assets/citron.png' &&
          rightelements[2].imageURL === '../../assets/citron.png') ||
    
          (leftelements[0].imageURL === '../../assets/citron.png' &&
          centerelements[2].imageURL === '../../assets/citron.png' &&
          rightelements[1].imageURL === '../../assets/citron.png') ||
    
          (leftelements[2].imageURL === '../../assets/citron.png' &&
          centerelements[0].imageURL === '../../assets/citron.png' &&
          rightelements[1].imageURL === '../../assets/citron.png')
          );
          
      }
}