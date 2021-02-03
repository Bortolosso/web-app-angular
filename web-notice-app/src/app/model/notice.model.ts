export interface ModelNoticeReturn {
    data:{
        id?: string,
        tittle: string,
        content: string,
        date: string,   
    },
    code: number,
    message: string
}

export interface ModelNoticeSend {
    id?: string,
    tittle: string,
    content: string,
    date: string,   
}

export interface ResponseError {
    error: {
      codeStatus: string,
      errorMessage: string,
      timestamp: string,
    }
  }