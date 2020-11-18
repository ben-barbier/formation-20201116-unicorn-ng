import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Unicorn } from '../models/unicorn.model';

@Injectable({
    providedIn: 'root',
})
export class UnicornsService {
    constructor(private http: HttpClient) {}

    public getAll(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>(`${environment.apiUrl}/unicorns`);
    }

    public get(id: number): Observable<Unicorn> {
        return this.http.get<Unicorn>(`${environment.apiUrl}/unicorns/${id}`);
    }

    public delete(unicorn: Unicorn): Observable<void> {
        return this.http.delete<void>(`${environment.apiUrl}/unicorns/${unicorn.id}`);
    }

    public create(unicorn: Unicorn): Observable<Unicorn> {
        return this.http.post<Unicorn>(`${environment.apiUrl}/unicorns`, unicorn);
    }

    public exists(id: number): Observable<boolean> {
        return this.http.head<boolean>(`${environment.apiUrl}/unicorns/${id}`);
    }

    public update(unicorn: Unicorn): Observable<Unicorn> {
        return this.http.put<Unicorn>(`${environment.apiUrl}/unicorns/${unicorn.id}`, unicorn);
    }

    // public patch(id: number, unicorn: Partial<Unicorn>): Observable<Unicorn> { ✅
    public patch(unicorn: Partial<Unicorn> & { id: number }): Observable<Unicorn> {
        return this.http.patch<Unicorn>(`${environment.apiUrl}/unicorns/${unicorn.id}`, unicorn);
    }
}
