import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyFwComponent } from './body-fw.component';

describe('BodyFwComponent', () => {
  let component: BodyFwComponent;
  let fixture: ComponentFixture<BodyFwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyFwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyFwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
