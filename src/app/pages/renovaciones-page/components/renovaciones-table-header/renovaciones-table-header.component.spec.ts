import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovacionesTableHeaderComponent } from './renovaciones-table-header.component';

describe('RenovacionesTableHeaderComponent', () => {
  let component: RenovacionesTableHeaderComponent;
  let fixture: ComponentFixture<RenovacionesTableHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RenovacionesTableHeaderComponent]
    });
    fixture = TestBed.createComponent(RenovacionesTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
