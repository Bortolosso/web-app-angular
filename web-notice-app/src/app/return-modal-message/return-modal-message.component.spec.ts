import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnModalMessageComponent } from './return-modal-message.component';

describe('ReturnModalMessageComponent', () => {
  let component: ReturnModalMessageComponent;
  let fixture: ComponentFixture<ReturnModalMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnModalMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnModalMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
