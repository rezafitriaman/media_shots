import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

export class SocialModel {
  constructor(public link: string, public image: string) {
    this.link = link;
    this.image = image;
  }
}
