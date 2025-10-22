import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Equipement } from './equipement';

describe('Equipement', () => {
  let component: Equipement;
  let fixture: ComponentFixture<Equipement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Equipement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Equipement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
