import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfCountryComponent } from './details-of-country.component';

describe('DetailsOfCountryComponent', () => {
  let component: DetailsOfCountryComponent;
  let fixture: ComponentFixture<DetailsOfCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsOfCountryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsOfCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
