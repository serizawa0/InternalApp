import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMessages } from './group-messages';

describe('GroupMessages', () => {
  let component: GroupMessages;
  let fixture: ComponentFixture<GroupMessages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupMessages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupMessages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
