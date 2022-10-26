import { Component, ElementRef, OnInit } from '@angular/core';

import { IconDefinition, faUserGroup, faPlus, faPenToSquare, faTrashCan, faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import { BrainiacInterface } from 'src/app/models/brainiac-interface';

import { BrainiacService } from '../../services/brainiac.service';

import { ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-of-smart-guys',
  templateUrl: './list-of-smart-guys.component.html',
  styleUrls: ['./list-of-smart-guys.component.scss']
})
export class ListOfSmartGuysComponent implements OnInit {

  faUserGroup: IconDefinition = faUserGroup;
  faPlus: IconDefinition = faPlus;
  faPenToSquare: IconDefinition = faPenToSquare;
  faTrashCan: IconDefinition = faTrashCan;
  faRectangleXmark: IconDefinition = faRectangleXmark;

  itemsArray: BrainiacInterface[] = [];

  idInput?: number = -1;
  firstNameInput: string = '';
  lastNameInput: string = '';
  emailInput: string = '';

  @ViewChild('myModalClose') modalClose!: ElementRef;

  modalWorkStatus: string = '';
  errorsForTableText: string = '';

  constructor(private brainiacService: BrainiacService) { }

  ngOnInit(): void {
    this.itemsArray.splice(0, this.itemsArray.length);

    this.brainiacService.getAllBrainiacs().subscribe(
      allBrainiacs => {
        this.itemsArray = allBrainiacs;
      }
    );
  }

  saveBrainiac(form: HTMLFormElement) {
    if (form['firstName'] && form['lastName'] && form['email']) {
      if (this.modalWorkStatus === 'ADD') {
        this.brainiacService.addBrainiac({ firstName: form['firstName'], lastName: form['lastName'], email: form['email'] })
          .subscribe(response => {
            let maxIndex = -1;
            this.itemsArray.forEach(element => {
              let currentIndex: number | undefined = element.id;
              if (currentIndex && currentIndex > maxIndex) {
                maxIndex = currentIndex;
              }
            });
            this.itemsArray.push({ id: (maxIndex + 1), firstName: form['firstName'], lastName: form['lastName'], email: form['email'], avatarUrl: '' });
            
            this.modalClose.nativeElement.click();
          },
          (error: HttpErrorResponse) => {
            this.errorsForTableText = this.errorsForTableText + '\n' + error.message + ', ' + error.status + ', ' + error.statusText;
          });
      } else if (this.modalWorkStatus === 'EDIT') {
        this.brainiacService.editBrainiac({ id: Number(form['id']), firstName: form['firstName'], lastName: form['lastName'], email: form['email'] })
          .subscribe(response => {
            this.itemsArray.forEach(element => {
              if (element.id === Number(form['id'])) {
                element.firstName = form['firstName'];
                element.lastName = form['lastName'];
                element.email = form['email'];
              }
            });

            this.modalClose.nativeElement.click();
          },
          (error: HttpErrorResponse) => {
            this.errorsForTableText = this.errorsForTableText + '\n' + error.message + ', ' + error.status + ', ' + error.statusText;
          });
      }
    }
  }

  editBrainiac(brainiac: BrainiacInterface) {
    this.idInput = brainiac.id;
    this.firstNameInput = brainiac.firstName;
    this.lastNameInput = brainiac.lastName;
    this.emailInput = brainiac.email;

    this.modalWorkStatus = 'EDIT';
  }

  deleteBrainiac(brainiac: BrainiacInterface) {
    let answer: boolean = confirm('Do you want to remove this item : ' + brainiac.id + ', ' + brainiac.firstName + ', ' + brainiac.lastName + ' ?');

    if (answer) {
      this.brainiacService.deleteBrainiac(brainiac.id).subscribe(
        response => {
          let indexToRemove: number = this.itemsArray.indexOf(brainiac);
          if (indexToRemove > -1) {
            this.itemsArray.splice(indexToRemove, 1);
          }
        },
        (error: HttpErrorResponse) => {
          this.errorsForTableText = this.errorsForTableText + '\n' + error.message + ', ' + error.status + ', ' + error.statusText;
        }
      );
    }
  }

  addBrainiac() {
    this.idInput = -1;
    this.firstNameInput = '';
    this.lastNameInput = '';
    this.emailInput = '';

    this.modalWorkStatus = 'ADD';
  }

  clearBeckendErrors() {
    this.errorsForTableText = '';
  }

}
