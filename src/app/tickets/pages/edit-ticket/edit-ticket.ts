import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { TicketsService } from '../../services/tickets';

@Component({
  selector: 'app-edit-ticket',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-ticket.html'
})
export class EditTicketComponent implements OnInit {

  id!: string;

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private ticketsService: TicketsService
  ) { }



  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.form = this.fb.group({
      estado: ['open']
    });

    this.loadTicket();
  }

  loadTicket() {
    this.ticketsService.findOne(this.id).subscribe((t: any) => {
      this.form.patchValue({
        estado: t.estado
      });
    });
  }

  save() {
    this.ticketsService.updateStatus(this.id, this.form.value.estado!).subscribe(() => {
      this.router.navigate(['/tickets']);
    });
  }
}
