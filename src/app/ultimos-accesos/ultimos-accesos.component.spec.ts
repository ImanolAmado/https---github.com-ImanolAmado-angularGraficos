import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimosAccesosComponent } from './ultimos-accesos.component';

describe('UltimosAccesosComponent', () => {
  let component: UltimosAccesosComponent;
  let fixture: ComponentFixture<UltimosAccesosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UltimosAccesosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltimosAccesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
