import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: ''    , redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component : HomeComponent },
  { path: 'consumindo-api-um', component: QuemSomosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
