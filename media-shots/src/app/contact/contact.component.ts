import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '../message.service';
import { EmailData } from '../message.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [MessageService],
})
export class ContactComponent implements OnInit {
  title = 'Contact';
  subTitle = 'Neem contact met ons op';
  image = '../../assets/img/videoBanner.jpg';
  title2 = 'Lorem Ipsum';
  subTitle2 =
    'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen.\n' +
    '                Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw,\n' +
    '                toen een onbekende drukker een zethaak met letters nam en ze door elkaar\n' +
    '                husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen\n' +
    '                overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische\n' +
    '                letterzetting.\n' +
    "                Het is in de jaren '60 populair geworden met de introductie van Letraset v";
  @ViewChild('sendEmail', { static: false }) sendEmail: NgForm;
  feedbackData;
  constructor(private service: MessageService) {}

  ngOnInit(): void {
    this.service.feedbackMessage().subscribe((data) => {
      this.feedbackData = data;
      this.sendEmail.resetForm();
    });
  }

  onClickSubmit(data: EmailData) {
    this.service.sendMessage(data);
  }
}
