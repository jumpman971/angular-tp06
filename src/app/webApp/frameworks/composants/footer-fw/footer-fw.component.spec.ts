import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFwComponent } from './footer-fw.component';

describe('FooterFwComponent', () => {
  let component: FooterFwComponent;
  let fixture: ComponentFixture<FooterFwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterFwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
