import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfSmartGuysComponent } from './components/list-of-smart-guys/list-of-smart-guys.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ListOfSmartGuysComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    ListOfSmartGuysComponent
  ]
})
export class SmartGuysModule { }
