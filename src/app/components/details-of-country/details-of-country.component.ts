import { Component, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Country } from 'src/app/core/models/Country';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-details-of-country',
  standalone: true,
  imports: [
    NgxChartsModule,
    NoopAnimationsModule
  ],
  templateUrl: './details-of-country.component.html',
  styleUrl: './details-of-country.component.scss'
})
export class DetailsOfCountryComponent {
  @Input() data?: Country | null
    numberOfEntries: number | string = "???"
    totalMedals: number | string = "???"
    numberOfAthletes: number | string = "???"

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Dates';
  yScaleMin: number = 0;

  ngOnChanges(): void {
    if(this.data) {
      this.totalMedals = this.data.value;
      this.numberOfEntries = this.data.numberOfParticipation;
      this.numberOfAthletes = this.data.numberOfAthlete;
      this.yScaleMin = this.getYScaleMin();
    }
  }

  getYScaleMin(): number {
    let lowCopple = this.data?.series.reduce((prev, currentValue) => (prev.value < currentValue.value) ? prev : currentValue);
    if (lowCopple?.value) {
      return lowCopple.value - 10;
    }
    return 0;
  }
}
