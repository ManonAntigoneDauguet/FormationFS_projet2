import { Participation } from "./Participation";

export interface CountryJSON {
    id: number,
    country: string,
    participations: Participation[]
}