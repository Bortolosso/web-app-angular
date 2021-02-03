import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteNoticeComponent } from './modal-delete-notice.component';

describe('ModalDeleteNoticeComponent', () => {
  let component: ModalDeleteNoticeComponent;
  let fixture: ComponentFixture<ModalDeleteNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
