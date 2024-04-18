import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovacionesTableComponent } from './renovaciones-table.component';

describe('RenovacionesTableComponent', () => {
  let component: RenovacionesTableComponent;
  let fixture: ComponentFixture<RenovacionesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RenovacionesTableComponent]
    });
    fixture = TestBed.createComponent(RenovacionesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
