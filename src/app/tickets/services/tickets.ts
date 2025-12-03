import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ticket } from "../components/ticket-item/ticket-item";

@Injectable({ providedIn: 'root' })
export class TicketsService {

  private baseUrl = 'http://localhost:3001/api/tickets'; 

  constructor(private http: HttpClient) {}

  create(ticket: { description: string }) {
    return this.http.post(`${this.baseUrl}`, ticket);
  }

  findAll() {
    return this.http.get(`${this.baseUrl}`);
  }

  findOne(id: string): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.baseUrl}/${id}`);
  }

  updateStatus(id: string, status: string) {
    return this.http.patch(`${this.baseUrl}/${id}/status`, { status });
  }
}
