import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitasDiaComponent } from './visitas-dia.component';

describe('VisitasDiaComponent', () => {
  let component: VisitasDiaComponent;
  let fixture: ComponentFixture<VisitasDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitasDiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitasDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
