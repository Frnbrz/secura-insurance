import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreClientDetailsComponent } from './more-client-details.component';

describe('MoreClientDetailsComponent', () => {
  let component: MoreClientDetailsComponent;
  let fixture: ComponentFixture<MoreClientDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MoreClientDetailsComponent]
    });
    fixture = TestBed.createComponent(MoreClientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
