import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPortalComponent } from './landing-portal.component';

describe('LandingPortalComponent', () => {
  let component: LandingPortalComponent;
  let fixture: ComponentFixture<LandingPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
