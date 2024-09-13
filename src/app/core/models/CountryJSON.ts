import { Participation } from "./Participation";

export class CountryJSON {

    constructor(
        public id: number,
        public country: string,
        public participations: Array<Participation>
    ) { }
}