import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDirections } from './get-directions';

describe('GetDirections', () => {
  let component: GetDirections;
  let fixture: ComponentFixture<GetDirections>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDirections],
    }).compileComponents();

    fixture = TestBed.createComponent(GetDirections);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
