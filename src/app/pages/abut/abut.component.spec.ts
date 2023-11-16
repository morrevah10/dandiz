import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbutComponent } from './abut.component';

describe('AbutComponent', () => {
  let component: AbutComponent;
  let fixture: ComponentFixture<AbutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbutComponent]
    });
    fixture = TestBed.createComponent(AbutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
