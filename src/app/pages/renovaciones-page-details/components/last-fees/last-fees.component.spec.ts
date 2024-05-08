import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastFeesComponent } from './last-fees.component';

describe('LastFeesComponent', () => {
  let component: LastFeesComponent;
  let fixture: ComponentFixture<LastFeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LastFeesComponent]
    });
    fixture = TestBed.createComponent(LastFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
