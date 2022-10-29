import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { BrainiacService } from '../../services/brainiac.service';
import { ListOfSmartGuysComponent } from './list-of-smart-guys.component';

describe('ListOfSmartGuysComponent', () => {
  let component: ListOfSmartGuysComponent;
  let fixture: ComponentFixture<ListOfSmartGuysComponent>;
  let brainiacService: BrainiacService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfSmartGuysComponent ],
      providers: [ BrainiacService ],
      imports: [ HttpClientTestingModule, FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfSmartGuysComponent);
    component = fixture.componentInstance;

    brainiacService = fixture.debugElement.injector.get(BrainiacService);

    fixture.detectChanges();
  });

  it('should create component and service', () => {
    expect(component).toBeDefined();
    expect(brainiacService).toBeDefined();
  });
});
