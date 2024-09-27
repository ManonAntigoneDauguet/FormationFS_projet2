import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './core/components/header/header.component';
import { MedalsPerContryComponent } from './components/medals-per-contry/medals-per-contry.component';
import { DetailsOfCountryComponent } from './components/details-of-country/details-of-country.component';
import { DetailComponent } from './pages/detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderComponent,
    MedalsPerContryComponent,
    DetailsOfCountryComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
