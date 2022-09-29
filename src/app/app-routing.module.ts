import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './@components/counter/counter.component';
import { HomePageComponent } from './@components/home-page/home-page.component';
import { NotFoundComponent } from './@components/not-found/not-found.component';
import { TodoComponent } from './@components/todo/todo.component';

const routes: Routes = [
  {
    path:'',component:HomePageComponent,
  },
  {
    path:'todo',component:TodoComponent,
  },
  {
    path:'counter',component:CounterComponent,
  },
  // { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
