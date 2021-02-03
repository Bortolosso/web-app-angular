import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

//Service
import { NoticeService } from "../../service/notice.service";

@Component({
  selector: 'app-modal-delete-notice',
  templateUrl: './modal-delete-notice.component.html',
  styleUrls: ['./modal-delete-notice.component.css']
})
export class ModalDeleteNoticeComponent implements OnInit {

  constructor(
    @Optional() private dialogRef: MatDialogRef<ModalDeleteNoticeComponent>,
    private noticeService: NoticeService,
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
  ) { }

  ngOnInit(): void {}

  checkDeleteNotice() {
    if (this.data.id) {
      this.deleteByIdNotice(this.data.id);
    } else {
      this.close();
    }
  }

  deleteByIdNotice(id: string) {
    this.noticeService.deleteByIdNotice(id).subscribe((res) => {
      alert('Noticia deletada com sucesso !')
      this.close()
    },
    (error) => {
      alert('Houve uma falha, tente novamente !')
      this.close();
    },);
  };

  close() {
    this.dialogRef.close();
  }

}
