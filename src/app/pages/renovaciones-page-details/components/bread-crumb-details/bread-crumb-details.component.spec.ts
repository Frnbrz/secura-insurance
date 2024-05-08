import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCrumbDetailsComponent } from './bread-crumb-details.component';

describe('BreadCrumbDetailsComponent', () => {
  let component: BreadCrumbDetailsComponent;
  let fixture: ComponentFixture<BreadCrumbDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BreadCrumbDetailsComponent]
    });
    fixture = TestBed.createComponent(BreadCrumbDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
