import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, from, Observable, throwError } from 'rxjs';
import { catchError, concatAll, map, mergeMap, toArray } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Capacity } from '../models/capacity.model';
import { Unicorn } from '../models/unicorn.model';
import { CapacitiesService } from './capacities.service';

@Injectable({
    providedIn: 'root',
})
export class UnicornsService {
    constructor(private http: HttpClient, private capacitiesService: CapacitiesService) {}

    public getAllWithCapacitiesLabels(): Observable<Unicorn[]> {
        return this.getAll().pipe(
            catchError(err => {
                console.log(err);

                return throwError(err);
            }),
            concatAll(),
            mergeMap(unicorn =>
                from(unicorn.capacities).pipe(
                    mergeMap(capacityId => this.capacitiesService.get(capacityId)),
                    toArray(),
                    map((capacities: Capacity[]): Unicorn => ({ ...unicorn, capacitiesObj: capacities })),
                ),
            ),

            toArray(),
        );
    }

    public getAllWithCapacitiesLabels2(): Observable<Unicorn[]> {
        const unicorns$ = this.getAll();
        const capacities$ = this.capacitiesService.getAll();

        return forkJoin([unicorns$, capacities$]).pipe(
            map(([unicorns, capacities]) => {
                return unicorns.map(unicorn => ({
                    ...unicorn,
                    capacitiesObj: capacities.filter(capacity => unicorn.capacities.includes(capacity.id)),
                }));
            }),
        );
    }

    public getAll(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>(`${environment.apiUrl}/unicorns`).pipe(
            // concatAll(),
            // map((unicorn: Unicorn) => ({ ...unicorn, weight: unicorn.weight + 20 })),
            // toArray(),

            map(unicorns => unicorns.map(unicorn => ({ ...unicorn, weight: unicorn.weight + 20 }))),
        );
    }

    // public getAll(): Observable<Unicorn[]> {
    //     return this.http.get<Unicorn[]>(`${environment.apiUrl}/unicorns`);
    // }

    public get(id: number): Observable<Unicorn> {
        // return this.http
        //     .get<Unicorn[]>('http://localhost:3000/unicorns')
        //     .pipe(map(unicorns => unicorns.find(u => u.id === id)));
        //
        // return this.http.get<Unicorn[]>('http://localhost:3000/unicorns').pipe(
        //     concatAll(),
        //     filter((unicorn: Unicorn) => unicorn.id === id),
        // );

        return this.http.get<Unicorn>(`${environment.apiUrl}/unicorns/${id}`);
    }

    public delete(unicorn: Unicorn): Observable<void> {
        return this.http.delete<void>(`${environment.apiUrl}/unicorns/${unicorn.id}`);
    }

    public create(unicorn: Omit<Unicorn, 'id'>): Observable<Unicorn> {
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
