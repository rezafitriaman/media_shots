import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamenwerkingComponent } from './samenwerking.component';

describe('SamenwerkingComponent', () => {
  let component: SamenwerkingComponent;
  let fixture: ComponentFixture<SamenwerkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamenwerkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamenwerkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
