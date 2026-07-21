import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallHost } from './call-host';

describe('CallHost', () => {
  let component: CallHost;
  let fixture: ComponentFixture<CallHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallHost],
    }).compileComponents();

    fixture = TestBed.createComponent(CallHost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
