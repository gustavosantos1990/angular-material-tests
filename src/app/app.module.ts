import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';
import { AppComponent } from './app.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { TableFormComponent } from './table-form/table-form.component';
import { AppRoutingModule } from './app-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    AddressFormComponent,
    TableFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
