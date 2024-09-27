import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Country } from 'src/app/core/models/Country';
import { OlympicService } from 'src/app/core/services/olympic.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics?: Country[];
  subscription!: Subscription;

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.subscription = this.olympicService.getOlympics().subscribe(
      {
        next: (data) => this.olympics = data,
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
