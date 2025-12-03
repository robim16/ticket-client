import { Component, OnInit } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { TicketsService } from '../../services/tickets';
import { Ticket, TicketItemComponent } from '../../components/ticket-item/ticket-item';
import { RouterModule } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-tickets',
  standalone: true,
  imports: [CommonModule, AsyncPipe, RouterModule, TicketItemComponent],
  templateUrl: './list-tickets.html'
})
export class ListTicketsComponent implements OnInit {

  tickets$!: Observable<Ticket[]>;

  constructor(private ticketsService: TicketsService) {}

  ngOnInit() {
    this.tickets$ = this.ticketsService.findAll().pipe(
      map((res: any) => Array.isArray(res) ? res : res.tickets || [])
    );
  }

}
