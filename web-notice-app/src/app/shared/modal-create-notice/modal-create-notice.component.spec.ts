import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateNoticeComponent } from './modal-create-notice.component';

describe('ModalCreateNoticeComponent', () => {
  let component: ModalCreateNoticeComponent;
  let fixture: ComponentFixture<ModalCreateNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
