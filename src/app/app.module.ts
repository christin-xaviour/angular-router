import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DatesheetComponent } from './datesheet/datesheet.component';
import { GradesComponent } from './grades/grades.component';
import { ResultComponent } from './result/result.component';
import { SeatingComponent } from './seating/seating.component';

@NgModule({
  declarations: [
    AppComponent,
    DatesheetComponent,
    GradesComponent,
    ResultComponent,
    SeatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'App',
      component: AppComponent},
      {path: 'grades',
      component: GradesComponent},
      {path: 'datesheet',
      component: DatesheetComponent},
      {path: 'result',
      component: ResultComponent},
      {path: 'seating',
      component: SeatingComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
