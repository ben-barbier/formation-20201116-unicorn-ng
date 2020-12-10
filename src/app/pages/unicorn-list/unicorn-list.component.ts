import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornsDispatchers } from '../../store/services/unicorns.dispatchers';
import { UnicornsSelectors } from '../../store/services/unicorns.selectors';

@Component({
    selector: 'app-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss'],
})
export class UnicornListComponent {
    public unicorns$: Observable<Unicorn[]> = this.unicornsSelectors.unicorns$;

    trackByUnicornId = (index: number, unicorn: Unicorn): number => unicorn.id;

    constructor(private unicornsSelectors: UnicornsSelectors, private unicornsDispatchers: UnicornsDispatchers) {
        this.unicornsDispatchers.getUnicorns();
    }

    public removeUnicornFromList(unicorn: Unicorn): void {
        this.unicornsDispatchers.deleteUnicorn(unicorn);
    }

    public refresh(): void {
        this.unicornsDispatchers.getUnicorns();
    }

    public updateUnicorn(unicorn: Unicorn): void {
        this.unicornsDispatchers.updateUnicorn(unicorn);
    }
}
