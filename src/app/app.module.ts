import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { FooterComponent } from './footer/footer.component';
import { JumboIntroComponent } from './jumbo-intro/jumbo-intro.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { OpensourceComponent } from './opensource/opensource.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { DevelopmentComponent } from './development/development.component';
import { SupportComponent } from './support/support.component';
import { LegalComponent } from './legal/legal.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { TrademarkComponent } from './trademark/trademark.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumboComponent,
    SlideshowComponent,
    CopyrightComponent,
    FooterComponent,
    JumboIntroComponent,
    HomeCarouselComponent,
    OpensourceComponent,
    HomeComponent,
    DevelopmentComponent,
    SupportComponent,
    LegalComponent,
    ConsultingComponent,
    PrivacyComponent,
    TermsComponent,
    TrademarkComponent,
    CaseStudiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
