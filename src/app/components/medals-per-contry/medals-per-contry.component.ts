import { Component, Input } from '@angular/core';
import { Event, Router } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Country } from 'src/app/core/models/Country';


@Component({
  selector: 'app-medals-per-contry',
  standalone: true,
  imports: [
    NgxChartsModule
  ],
  templateUrl: './medals-per-contry.component.html',
  styleUrl: './medals-per-contry.component.scss'
})
export class MedalsPerContryComponent {
  @Input() data?: Country[] | null
  numberOfCountries: number | string = "???"
  numberOfJOs: number | string = "???"

  constructor(private router: Router) { }

  // graphics options
  gradient: boolean = false;
  showLabels: boolean = true;
  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#793d52', '#89a1db', '#9780a1', '#b8cbe7', '#956065']
  };

  /**
   * Update the data displayed on the update of data
   */
  ngOnChanges(): void {
    if (this.data) {
      this.numberOfCountries = this.data.length;
      this.numberOfJOs = (this.data.reduce((prev, currentValue) => (prev.numberOfParticipation > currentValue.numberOfParticipation) ? prev : currentValue)).numberOfParticipation;
    }
  }

  /**
   * Allow to show the Detail page of the selected country
   * @param { event } selected as the country clicked by user
   */
  onSelect(selected: Event): void {
    this.router.navigateByUrl(`detail/${selected}`);
  }
}