import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesPotencialesComponent } from './clientes-potenciales.component';

describe('ClientesPotencialesComponent', () => {
  let component: ClientesPotencialesComponent;
  let fixture: ComponentFixture<ClientesPotencialesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClientesPotencialesComponent]
    });
    fixture = TestBed.createComponent(ClientesPotencialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
