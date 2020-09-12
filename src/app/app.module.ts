import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppDirective } from './app.directive';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    AppDirective
  ],
  imports: [
    BrowserModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatRippleModule,
    MatInputModule,
  ],
  exports: [
    BrowserModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatRippleModule,
    MatInputModule,],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
