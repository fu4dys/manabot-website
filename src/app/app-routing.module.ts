import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CardsDatabaseComponent } from './cards-database/cards-database.component';

const routes: Routes = [
  {path:'cards', component:CardsDatabaseComponent},
  {path:'card', component:CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }