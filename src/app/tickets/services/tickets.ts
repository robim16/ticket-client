import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ticket } from "../components/ticket-item/ticket-item";
import { catchError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TicketsService {

  private baseUrl = 'http://localhost:3001/api/tickets'; 

  constructor(private http: HttpClient) {}

  create(ticket: { description: string }) {
    return this.http.post(`${this.baseUrl}`, ticket).pipe(
      catchError((error) => {
        console.error('Error creating a ticket:', error);
        throw error;
      })
    );
  }

  findAll() {
    return this.http.get(`${this.baseUrl}`).pipe(
      catchError((error) => {
        console.error('Error fetching tickets:', error);
        throw error;
      })
    );
  }

  findOne(id: string): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.baseUrl}/${id}`).pipe(
      catchError((error) => {
        console.error('Error fetching a ticket:', error);
        throw error;
      })
    );
  }

  updateStatus(id: string, estado: string) {
    return this.http.patch(`${this.baseUrl}/${id}/status`, { estado }).pipe(
      catchError((error) => {
        console.error('Error updating the ticket:', error);
        throw error;
      })
    );
  }
}
