import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Country } from 'src/app/core/models/Country';
import { OlympicService } from 'src/app/core/services/olympic.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  public countryData?: Country;
  subscription!: Subscription;

  constructor(private olympicService: OlympicService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const countryName = this.route.snapshot.params['name'];
    this.subscription = this.olympicService.getCountryDetail(countryName).subscribe(
      {
        next: (data) => this.countryData = data,
        error: (e) => console.error(e)
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe(); 
    }
  }
}
