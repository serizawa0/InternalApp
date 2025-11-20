import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalMessages } from './personnal-messages';

describe('PersonnalMessages', () => {
  let component: PersonnalMessages;
  let fixture: ComponentFixture<PersonnalMessages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonnalMessages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonnalMessages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
