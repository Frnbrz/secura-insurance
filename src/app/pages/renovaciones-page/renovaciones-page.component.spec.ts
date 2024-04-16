import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovacionesPageComponent } from './renovaciones-page.component';

describe('RenovacionesPageComponent', () => {
  let component: RenovacionesPageComponent;
  let fixture: ComponentFixture<RenovacionesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RenovacionesPageComponent]
    });
    fixture = TestBed.createComponent(RenovacionesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
