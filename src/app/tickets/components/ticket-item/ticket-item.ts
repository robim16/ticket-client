import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export interface Ticket {
  id: string;
  fecha: string;
  descripcion: string;
  estado: string;
}

@Component({
  selector: 'app-ticket-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-item.html'
})
export class TicketItemComponent {

  @Input() ticket!: Ticket;

  constructor(private router: Router) { }

  editTicket() {
    this.router.navigate(['/tickets', this.ticket.id, 'edit']);
  }


}
