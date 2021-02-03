import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

//Model
import { ModelNoticeReturn, ModelNoticeSend } from "../model/notice.model";

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  apiUrl:string;

  constructor(
    private httpRequest: HttpClient,
  ) {
    this.apiUrl = environment.baseUrl;
  }

  getDataNoticeList(): Observable<ModelNoticeReturn> {
    return this.httpRequest.get<any>(
      `/notice/`,
    ).pipe(map(res => res), map((res: any) => {
      return res;
    }))
  }


  postNewNotice(dataForm: ModelNoticeSend): Observable<ModelNoticeSend> {
    return this.httpRequest.post<ModelNoticeSend>(
      `/notice/`,
      dataForm
    ).pipe(map(res => res), map((res: any) => {
      return res;
    }))
  }


  getByIdNotice(id: string) {
    return this.httpRequest.get<any>(
      `/notice/${id}`,
    ).pipe(map(res => res), map((res: any) => {
      return res;
    }))
  }


  deleteByIdNotice(id: string): Observable<any> {
    return this.httpRequest.delete<any>(
      `/notice/${id}`,
    ).pipe(map(res => res), map((res: any) => {
      return res;
    }))
  }


  updateByIdNotice(dataForm: ModelNoticeSend, id: string) {
    return this.httpRequest.put<any>(
      `/notice/${id}`,
      dataForm
    ).pipe(map(res => res), map((res: any) => {
      return res;
    }))
  }

}
