import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

import { CreateTalentComponent } from './components/talents/create-talent/create-talent.component';
import { ListTalentComponent } from './components/talents/list-talent/list-talent.component';
import { EditTalentComponent } from './components/talents/edit-talent/edit-talent.component';

import { CreateCoursComponent } from './components/cours/create-cours/create-cours.component';
import { ListCoursComponent } from './components/cours/list-cours/list-cours.component';
import { EditCoursComponent } from './components/cours/edit-cours/edit-cours.component';

import { WelcomeComponent } from './components/welcome/welcome/welcome.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



const routes: Routes = [
  {path : 'home', component : HomeComponent},

  {path : 'profile', component : ProfileComponent},

  {path : 'createtalent', component : CreateTalentComponent},
  {path : 'listtalent', component : ListTalentComponent},
  {path : 'edittalent/:id', component : EditTalentComponent},

  {path : 'createcours', component : CreateCoursComponent},
  {path : 'listcours', component : ListCoursComponent},
  {path : 'editcours/:id', component : EditCoursComponent},

  {path : '', component: WelcomeComponent},
  {path : '**', component : NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
