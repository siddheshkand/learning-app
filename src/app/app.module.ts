import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './@components/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './@components/counter/counter.component';
import { HomePageComponent } from './@components/home-page/home-page.component';
import { NotFoundComponent } from './@components/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CounterComponent,
    HomePageComponent,
    NotFoundComponent
  ],
  imports: [
    // Core Angular Module
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // 3rd Party Module
    NgbModule
    // Custom Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
