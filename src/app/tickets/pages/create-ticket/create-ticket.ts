import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TicketFormComponent } from '../../components/ticket-form/ticket-form';
import { TicketsService } from '../../services/tickets';

@Component({
  selector: 'app-create-ticket',
  standalone: true,
  templateUrl: './create-ticket.html',
  imports: [TicketFormComponent]
})
export class CreateTicketComponent {

  constructor(
    private ticketsService: TicketsService,
    private router: Router
  ) { }

  create(data: any) {
    this.ticketsService.create(data).subscribe(() => {
      this.router.navigate(['/tickets']);
    });
  }
}
