import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Country } from '../models/Country';
import { CountryJSON } from '../models/CountryJSON';
import { Participation } from '../models/Participation';
import { NameValueCopple } from '../models/NameValueCopple';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  private countriesSubject = new BehaviorSubject<Country[]>([]);
  private countrySubject = new BehaviorSubject<Country | null>(null);

  constructor(private http: HttpClient) { }

  /**
   * Load and format the data from JSON
   */
  loadInitialData() {
    return this.http.get<CountryJSON[]>(this.olympicUrl).pipe(
      map(countries => countries.map(
        countryData => (
          {
            id: countryData.id,
            name: countryData.country,
            participations: countryData.participations,
            numberOfParticipation : countryData.participations.length,
            numberOfAthlete : this.getTotalAthlete(countryData.participations),
            value: this.getTotalMedals(countryData.participations),
            series: this.getSeries(countryData.participations)
          }
        )
      )),
      tap((value) => this.countriesSubject.next(value)),
      catchError(() => {
        return EMPTY
      })
    );
  }

  /**
   * Return all the countries with the correct format
   * @returns { Observable } as the list of countries
   */
  getOlympics(): Observable<Country[]>  {
    return this.countriesSubject.asObservable();
  }

  /**
   * Return a country's the sum of medals 
   * @param { Array.<Participation> } participations as list of the data of each JO
   * @returns { Number }
   */
  getTotalMedals(participations: Participation[]): number {
    return participations.reduce((accumulator, currentValue) => accumulator + currentValue.medalsCount, 0);
  }
  
    /**
   * Return a country's the sum of athletes 
   * @param { Array.<Participation> } participations as list of the data of each JO
   * @returns { Number }
   */
  getTotalAthlete(participations: Array<Participation>) {
    return participations.reduce((accumulator, currentValue) => accumulator + currentValue.athleteCount, 0)
  }

  /**
   * Return the data of the selected country with the correct format
   * @param { String } countryName 
   * @returns { Observable }
   */
  getCountryDetail(countryName: string): Observable<Country> { 
    return this.getOlympics().pipe(
      map(countries => {
        const country = countries.find(country => country.name === countryName)
        if (!country) {
          throw new Error(`Country not found`);
        }
        return country;
      }),
      tap((value) => this.countrySubject.next(value)),
      catchError(() => {
        return EMPTY;
      })
    )
  }

  /**
   * Return the list of the medals per JO with the format waiting by the graphic library
   * @param { Array.<Participation> } participations as list of the data of each JO 
   * @returns { Array.<NameValueCopple> }
   */
  getSeries(participations: Participation[]): NameValueCopple[] {
    return participations.map(
        serie => ({
          name: serie.year.toString(),
          value: serie.medalsCount
        })
    )
  }
}
