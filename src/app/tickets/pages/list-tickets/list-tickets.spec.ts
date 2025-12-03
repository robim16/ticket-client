import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTickets } from './list-tickets';

describe('ListTickets', () => {
  let component: ListTickets;
  let fixture: ComponentFixture<ListTickets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTickets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTickets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
