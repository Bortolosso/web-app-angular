import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateNoticeComponent } from './modal-update-notice.component';

describe('ModalUpdateNoticeComponent', () => {
  let component: ModalUpdateNoticeComponent;
  let fixture: ComponentFixture<ModalUpdateNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUpdateNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
