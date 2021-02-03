import { Component, Optional } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

//Modals
import { ModalCreateNoticeComponent } from './shared/modal-create-notice/modal-create-notice.component';
import { ModalDeleteNoticeComponent } from './shared/modal-delete-notice/modal-delete-notice.component';
import { ModalUpdateNoticeComponent } from './shared/modal-update-notice/modal-update-notice.component';

//Model
import { ModelNoticeReturn } from "./model/notice.model";

//Service
import { NoticeService } from "./service/notice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'web-notice-app';

  dataReturn: any = {}

  constructor(
    private noticeService: NoticeService,
    private dialog: MatDialog,
    @Optional() private dialogRef: MatDialogRef<AppComponent>,
  ) { }

  ngOnInit(): void {
    this.getDataNotices();
  }

  getDataNotices() {
    this.noticeService.getDataNoticeList().subscribe((returnApi: ModelNoticeReturn) => {
        this.dataReturn = returnApi.data;
        console.log(this.dataReturn);
        
      }, error => {
        console.log(error);
      });
  };

  //Open Modals

  public openModalDialogCreate() {
    const dialogRef = this.dialog.open(ModalCreateNoticeComponent, {
      width: '40%',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      setTimeout(() => {this.getDataNotices();}, 300);
      if (result) { };
    });
  };

  public openModalDialogUpdate(id: string) {
    const dialogRef = this.dialog.open(ModalUpdateNoticeComponent, {
      width: '40%',
      data: {
        id
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      setTimeout(() => {this.getDataNotices();}, 300);
      if (result) { };
    });
  };

  public openModalDialogDelete(id: string) {
    const dialogRef = this.dialog.open(ModalDeleteNoticeComponent, {
      width: '30%',
      data: {
        id
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      setTimeout(() => {this.getDataNotices();}, 300);
      if (result) { };
    });
  };

  //END Open Modals

}
