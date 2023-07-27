import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FORMComponent } from './components/form/form.component';
import { ITEMCARDComponent } from './components/itemcard/itemcard.component';
import { CartComponent } from './components/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    FORMComponent,
    ITEMCARDComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
