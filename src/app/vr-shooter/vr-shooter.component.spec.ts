import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VRShooterComponent } from './vr-shooter.component';

describe('VRShooterComponent', () => {
  let component: VRShooterComponent;
  let fixture: ComponentFixture<VRShooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VRShooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VRShooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
