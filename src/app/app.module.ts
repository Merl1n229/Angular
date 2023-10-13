import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorDisplayComponent } from './calculator-display/calculator-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalculatorDisplayComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}