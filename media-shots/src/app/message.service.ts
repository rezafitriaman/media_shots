import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface EmailData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  hasBeenSend = new EventEmitter<string>();
  constructor(private http: HttpClient) {}

  sendMessage(data: EmailData): void {
    const option = {
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };

    this.http
      .post<any>('https://app-email-mediashots.herokuapp.com/send', {
        ...option,
      })
      .subscribe((data: any) => {
        this.hasBeenSend.emit(data.msg);
      });
  }

  feedbackMessage(): EventEmitter<string> {
    return this.hasBeenSend;
  }
}
