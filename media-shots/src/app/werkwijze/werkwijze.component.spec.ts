import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WerkwijzeComponent } from './werkwijze.component';

describe('WerkwijzeComponent', () => {
  let component: WerkwijzeComponent;
  let fixture: ComponentFixture<WerkwijzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerkwijzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerkwijzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
