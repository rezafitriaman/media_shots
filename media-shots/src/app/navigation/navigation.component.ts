import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  /* public dienstenActive = false;
  public overOnsActive = false;
  public werkwijzeActive = false;
  public portfolioActive = false;
  public contactActive = false;
  public homeActive = true;
  @Output() featureSelected = new EventEmitter<string>(); */
  constructor() { }

  ngOnInit(): void {
  }
/*   onSelectNav(feature: string) {
    this.featureSelected.emit(feature);
    if (feature === 'diensten') {
      this.dienstenActive = true;
      this.overOnsActive = false;
      this.werkwijzeActive = false;
      this.portfolioActive = false;
      this.contactActive = false;
    }else if (feature === 'over-ons') {
      this.dienstenActive = false;
      this.overOnsActive = true;
      this.werkwijzeActive = false;
      this.portfolioActive = false;
      this.contactActive = false;
    }else if (feature === 'werkwijze') {
      this.dienstenActive = false;
      this.overOnsActive = false;
      this.werkwijzeActive = true;
      this.portfolioActive = false;
      this.contactActive = false;
    }else if (feature === 'portfolio') {
      this.dienstenActive = false;
      this.overOnsActive = false;
      this.werkwijzeActive = false;
      this.portfolioActive = true;
      this.contactActive = false;
    }else if (feature === 'contact') {
      this.dienstenActive = false;
      this.overOnsActive = false;
      this.werkwijzeActive = false;
      this.portfolioActive = false;
      this.contactActive = true;
    }else {
      this.homeActive = true;
      this.dienstenActive = false;
      this.overOnsActive = false;
      this.werkwijzeActive = false;
      this.portfolioActive = false;
      this.contactActive = false;
    }
  } */
}
