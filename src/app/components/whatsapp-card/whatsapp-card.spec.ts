import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappCard } from './whatsapp-card';

describe('WhatsappCard', () => {
  let component: WhatsappCard;
  let fixture: ComponentFixture<WhatsappCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappCard],
    }).compileComponents();

    fixture = TestBed.createComponent(WhatsappCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
