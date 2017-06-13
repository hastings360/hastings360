import { DateFormatter } from '@angular/common/src/pipes/intl';
/**
 * meal object
 */
export class Meal{
    constructor(
        public imageUrl: string,
        public name: string,
        public description: string,
        public itemNumber: number,
        public contributor: string,
        public ingredients: string[],
        public contributionDate: DateFormatter,
        public estimatedCalories: number,
        public directions: string,
        public category: string,
        public likes: number
    ){}
}
