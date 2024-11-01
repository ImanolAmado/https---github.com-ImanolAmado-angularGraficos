import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PestanaVisitasComponent } from './pestana-visitas.component';

describe('PestanaVisitasComponent', () => {
  let component: PestanaVisitasComponent;
  let fixture: ComponentFixture<PestanaVisitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PestanaVisitasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PestanaVisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
