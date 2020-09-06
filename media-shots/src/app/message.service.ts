import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface EmailData {
  name: string, company: string, email: string, phone: string, message: string
}

@Injectable({
  providedIn: 'root'
})
export class MessageService { 
  hasBeenSend = new EventEmitter<string>();
  constructor(private _http: HttpClient) {}

  sendMessage(data: EmailData ) {
    const option = {
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      message: data.message }

      this._http.post<any>('https://app-email-mediashots.herokuapp.com/send', {...option}).subscribe(data => {
        this.hasBeenSend.emit(data.msg);
    })
  }

  feedbackMessage() {
    return this.hasBeenSend;
  }
}
