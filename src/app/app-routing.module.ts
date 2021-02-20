import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {OpensourceComponent} from './opensource/opensource.component';
import {DevelopmentComponent} from './development/development.component';
import {SupportComponent} from './support/support.component';
import {LegalComponent} from './legal/legal.component';
import {ConsultingComponent} from './consulting/consulting.component';
import {CaseStudiesComponent} from './case-studies/case-studies.component';
import {ContactComponent} from './contact/contact.component';
import {CaseSchematfComponent} from './case-schematf/case-schematf.component';
import {CaseHatf2Component} from './case-hatf2/case-hatf2.component';
import {CaseQuotemeComponent} from './case-quoteme/case-quoteme.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'development', component: DevelopmentComponent},
  { path: 'consulting', component: ConsultingComponent},
  { path: 'open-source', component: OpensourceComponent },
  { path: 'support', component: SupportComponent },
  { path: 'about/contact', component: ContactComponent},
  { path: 'about/legal', component: LegalComponent},
  { path: 'case-studies', component: CaseStudiesComponent},
  { path: 'case-studies/schematf', component: CaseSchematfComponent},
  { path: 'case-studies/hatf2', component: CaseHatf2Component},
  { path: 'case-studies/quoteme', component: CaseQuotemeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
