import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfSmartGuysComponent } from './list-of-smart-guys.component';

describe('ListOfSmartGuysComponent', () => {
  let component: ListOfSmartGuysComponent;
  let fixture: ComponentFixture<ListOfSmartGuysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfSmartGuysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfSmartGuysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
