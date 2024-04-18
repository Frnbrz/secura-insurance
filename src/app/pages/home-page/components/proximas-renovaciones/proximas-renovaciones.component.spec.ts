import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximasRenovacionesComponent } from './proximas-renovaciones.component';

describe('ProximasRenovacionesComponent', () => {
  let component: ProximasRenovacionesComponent;
  let fixture: ComponentFixture<ProximasRenovacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProximasRenovacionesComponent]
    });
    fixture = TestBed.createComponent(ProximasRenovacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
