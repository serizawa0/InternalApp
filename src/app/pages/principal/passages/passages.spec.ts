import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Passages } from './passages';

describe('Passages', () => {
  let component: Passages;
  let fixture: ComponentFixture<Passages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Passages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Passages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
