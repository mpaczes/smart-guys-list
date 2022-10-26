import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListOfSmartGuysComponent } from './smart-guys/components/list-of-smart-guys/list-of-smart-guys.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'smart-guys', component: ListOfSmartGuysComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
