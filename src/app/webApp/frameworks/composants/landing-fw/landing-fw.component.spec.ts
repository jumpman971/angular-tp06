import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFwComponent } from './landing-fw.component';

describe('LandingFwComponent', () => {
  let component: LandingFwComponent;
  let fixture: ComponentFixture<LandingFwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingFwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingFwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
