import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfSmartGuysComponent } from './components/list-of-smart-guys/list-of-smart-guys.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SmartGuysRoutingModule } from './smart-guys-routing.module';
import { BrainiacService } from './services/brainiac.service';
import { SmartGuyRowComponent } from './components/list-of-smart-guys/smart-guy-row/smart-guy-row.component';

@NgModule({
  declarations: [
    ListOfSmartGuysComponent,
    SmartGuyRowComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    SmartGuysRoutingModule
  ],
  providers: [
    BrainiacService
  ]
})
export class SmartGuysModule { }
