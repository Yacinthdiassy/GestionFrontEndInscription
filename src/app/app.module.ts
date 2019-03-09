import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { ProfileComponent } from './components/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TalentService} from './services/talent/talent.service';
import { CreateTalentComponent } from './components/talents/create-talent/create-talent.component';
import { ListTalentComponent } from './components/talents/list-talent/list-talent.component';
import { EditTalentComponent } from './components/talents/edit-talent/edit-talent.component';
import { EditEcoleComponent } from './components/ecoles/edit-ecole/edit-ecole.component';
import { CreateEcoleComponent } from './components/ecoles/create-ecole/create-ecole.component';
import { ListEcoleComponent } from './components/ecoles/list-ecole/list-ecole.component';
import { ListModuleComponent } from './components/modules/list-module/list-module.component';
import { CreateModuleComponent } from './components/modules/create-module/create-module.component';
import { EditModuleComponent } from './components/modules/edit-module/edit-module.component';
import { EditInscriptionComponent } from './components/inscriptions/edit-inscription/edit-inscription.component';
import { CreateInscriptionComponent } from './components/inscriptions/create-inscription/create-inscription.component';
import { ListInscriptionComponent } from './components/inscriptions/list-inscription/list-inscription.component';
import { ListCoursComponent } from './components/cours/list-cours/list-cours.component';
import { CreateCoursComponent } from './components/cours/create-cours/create-cours.component';
import { EditCoursComponent } from './components/cours/edit-cours/edit-cours.component';
import { EditProgramComponent } from './components/programs/edit-program/edit-program.component';
import { CreateProgramComponent } from './components/programs/create-program/create-program.component';
import { ListProgramComponent } from './components/programs/list-program/list-program.component';
import { WelcomeComponent } from './components/welcome/welcome/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NotFoundComponent,
    CreateTalentComponent,
    ListTalentComponent,
    EditTalentComponent,
    EditEcoleComponent,
    CreateEcoleComponent,
    ListEcoleComponent,
    ListModuleComponent,
    CreateModuleComponent,
    EditModuleComponent,
    EditInscriptionComponent,
    CreateInscriptionComponent,
    ListInscriptionComponent,
    ListCoursComponent,
    CreateCoursComponent,
    EditCoursComponent,
    EditProgramComponent,
    CreateProgramComponent,
    ListProgramComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModuleModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [TalentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
