import { Participation } from "./Participation";

export class Country {

    constructor(
        public id: number,
        public name: string,
        public participations: Array<Participation>
    ) { }
}