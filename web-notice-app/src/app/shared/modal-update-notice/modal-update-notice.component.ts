
import { Component, OnInit, Optional, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import * as moment from 'moment';

//Service
import { NoticeService } from "../../service/notice.service";

//Model
import { ModelNoticeSend, ResponseError } from "../../model/notice.model";

@Component({
  selector: 'app-modal-update-notice',
  templateUrl: './modal-update-notice.component.html',
  styleUrls: ['./modal-update-notice.component.css']
})
export class ModalUpdateNoticeComponent implements OnInit {

  starDate: any = [];
  dataReturn: any = [];

  dataForm!: FormGroup;

  constructor(
    @Optional() private dialogRef: MatDialogRef<ModalUpdateNoticeComponent>,
    private formBuilder: FormBuilder,
    private noticeService: NoticeService,
    @Inject(MAT_DIALOG_DATA) public data: {id: string},
  ) { }

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      tittle: ['', Validators.required],
      content: ['', Validators.required],
      date: [''],
    });

    this.getDataByIdNotice();
  }

  tittleFormControl = new FormControl('', [
    Validators.required,
  ]);

  contentFormControl = new FormControl('', [
    Validators.required,
  ]);


  getDataByIdNotice() {
    this.noticeService.getByIdNotice(this.data.id).subscribe((returnApi: any) => {
        this.dataReturn = returnApi.data;
        this.tittleFormControl.setValue(this.dataReturn.tittle)
        this.contentFormControl.setValue(this.dataReturn.content)
      }, error => {
        console.log(error);
      });
  };


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
    this.noticeService.updateByIdNotice(dataFormModal, this.data.id).subscribe(
      (resp) => {
        alert('Noticia editada com sucesso !');
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

