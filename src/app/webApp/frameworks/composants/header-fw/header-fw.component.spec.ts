import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFwComponent } from './header-fw.component';

describe('HeaderFwComponent', () => {
  let component: HeaderFwComponent;
  let fixture: ComponentFixture<HeaderFwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
