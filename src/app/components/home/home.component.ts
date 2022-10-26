import { Component, OnInit } from '@angular/core';

import { IconDefinition, faEye, faAddressCard, faUserPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faAddressCard: IconDefinition = faAddressCard;
  faUserPlus: IconDefinition = faUserPlus;
  faUserMinus: IconDefinition = faUserMinus;

  constructor() { }

  ngOnInit(): void {
  }

}
