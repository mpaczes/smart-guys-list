import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartGuyRowComponent } from './smart-guy-row.component';

describe('SmartGuyRowComponent', () => {
  let component: SmartGuyRowComponent;
  let fixture: ComponentFixture<SmartGuyRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartGuyRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartGuyRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
