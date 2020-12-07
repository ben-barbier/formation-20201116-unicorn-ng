import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { concatAll, filter, first, map, toArray } from 'rxjs/operators';
import { Unicorn } from './shared/models/unicorn.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private http: HttpClient) {
        // TODO: demos

        fetch('http://localhost:3000/unicorns')
            .then(response => response.json())
            .then((unicorns: Unicorn[]) => {
                // Ex1) : Filtrer les licornes de plus de 20Kg
                // Ex2) : Mettre le nom des licornes en majuscule

                // Ex3) : Age cumulé des licornes de plsu de 20Kg
                of(unicorns)
                    .pipe(
                        // filter((unicorn: Unicorn) => unicorn.weight > 20),
                        // map(unicorn => ({ ...unicorn, name: unicorn.name.toUpperCase() })),
                        // reduce((acc, unicorn) => acc + new Date().getFullYear() - unicorn.birthyear, 0),
                        concatAll(),
                        map((unicorn: Unicorn) => ({ ...unicorn, weight: unicorn.weight + 10 })),
                        toArray(),
                    )
                    .subscribe(unicorns2 => {
                        // EXOs
                        console.log(unicorns2);
                    });
            });
    }

    public getUnicorns(id: number): Observable<Unicorn> {
        return this.http.get<Unicorn[]>('http://localhost:3000/unicorns').pipe(
            concatAll(),
            filter((unicorn: Unicorn) => unicorn.id === id),
            first(),
        );
    }
}
