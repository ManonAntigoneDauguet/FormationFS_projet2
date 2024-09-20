import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedalsPerContryComponent } from './medals-per-contry.component';


describe('MedalsPerContryComponent', () => {
  let component: MedalsPerContryComponent;
  let fixture: ComponentFixture<MedalsPerContryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedalsPerContryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedalsPerContryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
