import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { HomeComponent } from './page/home/home.component';
import { UserComponent } from './page/user/user.component';
import { UserEditorComponent } from './page/user-editor/user-editor.component';
import { FilterPipe } from './pipe/filter.pipe';
import { UserCardComponent } from './page/usercard/user.component';
import { CarComponent } from './page/car/car.component';
import { TrueFalsePipe } from './pipe/true-false.pipe';
import { DataTableComponent } from './common/data-table/data-table.component';
import { CarEditorComponent } from './page/car-editor/car-editor.component';
import { CarService } from './service/car.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    UserComponent,
    UserEditorComponent,
    FilterPipe,
    UserCardComponent,
    CarComponent,
    TrueFalsePipe,
    DataTableComponent,
    CarEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'HUF'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
