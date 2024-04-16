import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovacionesPageDetailsComponent } from './renovaciones-page-details.component';

describe('RenovacionesPageDetailsComponent', () => {
  let component: RenovacionesPageDetailsComponent;
  let fixture: ComponentFixture<RenovacionesPageDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RenovacionesPageDetailsComponent]
    });
    fixture = TestBed.createComponent(RenovacionesPageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
