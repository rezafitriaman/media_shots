import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '../message.service';
import { EmailData} from '../message.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers:  [ MessageService ]
})
export class ContactComponent implements OnInit {
  @ViewChild('sendEmail', {static: false}) sendEmail: NgForm;
  feedbackData;
  constructor(private service: MessageService) { }

  ngOnInit(): void {
    this.service.feedbackMessage().subscribe(data => {
      this.feedbackData = data
      this.sendEmail.resetForm();
    })
  }

  onClickSubmit(data: EmailData) {
    console.log(data)
    this.service.sendMessage(data);
  }
}
