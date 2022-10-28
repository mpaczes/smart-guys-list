import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BrainiacInterface } from 'src/app/smart-guys/models/brainiac-interface';

import { IconDefinition, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { BrainiacEvenetEmitterInterface } from 'src/app/smart-guys/models/brainiac-evenet-emitter-interface';

@Component({
  selector: '[app-smart-guy-row]',
  templateUrl: './smart-guy-row.component.html',
  styleUrls: ['./smart-guy-row.component.scss']
})
export class SmartGuyRowComponent implements OnInit {

  @Input()
  brainiac: BrainiacInterface = { id:  -1, firstName: '', lastName: '', email: '', avatarUrl: '' };

  @Output()
  brainiacRowEventEmitter: EventEmitter<BrainiacEvenetEmitterInterface> = new EventEmitter();

  faTrashCan: IconDefinition = faTrashCan;
  faPenToSquare: IconDefinition = faPenToSquare;

  constructor() { }

  ngOnInit(): void {
  }

  deleteBrainiacEventEmitter(brainiacInput: BrainiacInterface) {
    let eventEmitter: BrainiacEvenetEmitterInterface = { brainiac: brainiacInput, eventSource: 'DELETE_BRANIAC' };
    this.brainiacRowEventEmitter.emit(eventEmitter);
  }

  editBrainiacEventEmitter(brainiacInput: BrainiacInterface) {
    let eventEmitter: BrainiacEvenetEmitterInterface = { brainiac: brainiacInput, eventSource: 'EDIT_BRANIAC' };
    this.brainiacRowEventEmitter.emit(eventEmitter);
  }

}
