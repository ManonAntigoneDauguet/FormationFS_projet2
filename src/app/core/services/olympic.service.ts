import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Country } from '../models/Country';
import { CountryJSON } from '../models/CountryJSON';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  private countrySubject = new BehaviorSubject<Country[]>([]);

  constructor(private http: HttpClient) {}

  /**
   * Load and format the data from sessionStorage or from JSON
   */
  loadInitialData() {
    return this.http.get<CountryJSON[]>(this.olympicUrl).pipe(
      map(countries => countries.map(
        countryData => new Country(
          countryData.id,
          countryData.country,
          countryData.participations
        )
      )),
      tap((value) => this.countrySubject.next(value)),
      catchError(() => {
        throw new Error(`Error loading data`);
      })
    );
  }

  getOlympics() {
    return this.countrySubject.asObservable();
  }
}
