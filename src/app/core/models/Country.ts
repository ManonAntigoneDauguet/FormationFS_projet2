import { NameValueCopple } from "./NameValueCopple";
import { Participation } from "./Participation";

export interface Country {
    id: number,
    name: string,
    participations: Participation[],
    numberOfParticipation: number,
    numberOfAthlete: number,
    value: number,
    series: NameValueCopple[]
}