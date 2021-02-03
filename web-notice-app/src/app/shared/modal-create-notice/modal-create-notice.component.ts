import { Component, OnInit, Optional } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import * as moment from 'moment';

//Service
import { NoticeService } from "../../service/notice.service";

//Model
import { ModelNoticeSend, ResponseError } from "../../model/notice.model";

@Component({
  selector: 'app-modal-create-notice',
  templateUrl: './modal-create-notice.component.html',
  styleUrls: ['./modal-create-notice.component.css']
})
export class ModalCreateNoticeComponent implements OnInit {
  starDate: any = [];

  dataForm!: FormGroup;

  constructor(
    @Optional() private dialogRef: MatDialogRef<ModalCreateNoticeComponent>,
    private formBuilder: FormBuilder,
    private noticeService: NoticeService,
  ) { }

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      tittle: ['', Validators.required],
      content: ['', Validators.required],
      date: [''],
    });
  }

  tittleFormControl = new FormControl('', [
    Validators.required,
  ]);

  contentFormControl = new FormControl('', [
    Validators.required,
  ]);


  sendFormatingData() {
    const dateFormat = moment(new Date()).format('DD-MM-YYYY');
    this.f.date.setValue(dateFormat);
    this.f.tittle.setValue(this.tittleFormControl.value)
    this.f.content.setValue(this.contentFormControl.value)

    if (this.dataForm.invalid) {
      console.log('Formulario invalido !');
      return;
    }
    if (this.dataForm.valid) {
      const dataFormModal = this.dataForm.getRawValue() as ModelNoticeSend;
      
      if (dataFormModal.id) {
        this.close();
      } else {
        this.requestPostNewNotice(dataFormModal);
        this.close();
      }
    }
  }

  requestPostNewNotice(dataFormModal: ModelNoticeSend) {
    this.noticeService.postNewNotice(dataFormModal).subscribe(
      (resp) => {
        alert('Noticia criada com sucesso !');
      },
      (error: ResponseError) => {
        alert('Houve uma falha, tente novamente !');
      });
  };

  get f() {
    return this.dataForm.controls;
  }

  close() {
    this.dialogRef.close();
  }

}
