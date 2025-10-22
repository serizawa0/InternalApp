import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consommable } from './consommable';

describe('Consommable', () => {
  let component: Consommable;
  let fixture: ComponentFixture<Consommable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Consommable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Consommable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
