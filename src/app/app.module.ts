import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './@components/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './@components/counter/counter.component';
import { HomePageComponent } from './@components/home-page/home-page.component';
import { NotFoundComponent } from './@components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CounterComponent,
    HomePageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
