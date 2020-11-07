import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginupComponent } from './loginup.component';

describe('LoginupComponent', () => {
  let component: LoginupComponent;
  let fixture: ComponentFixture<LoginupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
