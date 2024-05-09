import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerDataFormComponent } from './owner-data-form.component';

describe('OwnerDataFormComponent', () => {
  let component: OwnerDataFormComponent;
  let fixture: ComponentFixture<OwnerDataFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OwnerDataFormComponent]
    });
    fixture = TestBed.createComponent(OwnerDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
