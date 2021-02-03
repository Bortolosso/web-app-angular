import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './shared/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MomentModule } from 'ngx-moment';

//Modals
import { ModalCreateNoticeComponent } from './shared/modal-create-notice/modal-create-notice.component';
import { ModalDeleteNoticeComponent } from './shared/modal-delete-notice/modal-delete-notice.component';
import { ModalUpdateNoticeComponent } from './shared/modal-update-notice/modal-update-notice.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalCreateNoticeComponent,
    ModalDeleteNoticeComponent,
    ModalUpdateNoticeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
