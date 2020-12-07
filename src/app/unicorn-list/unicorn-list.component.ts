import { Component } from '@angular/core';
import { Unicorn } from '../shared/models/unicorn.model';
import { CapacitiesService } from '../shared/services/capacities.service';
import { UnicornsService } from '../shared/services/unicorns.service';

@Component({
    selector: 'app-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss'],
})
export class UnicornListComponent {
    public unicorns: Unicorn[] = [];

    constructor(private unicornsService: UnicornsService, capacitiesService: CapacitiesService) {
        this.loadUnicorns();
    }

    public removeUnicornFromList(unicornToDelete: Unicorn): void {
        this.unicornsService.delete(unicornToDelete).subscribe(() => {
            this.unicorns = this.unicorns.filter(unicorn => unicorn.id !== unicornToDelete.id);
        });
    }

    public refresh(): void {
        this.loadUnicorns();
    }

    private loadUnicorns(): void {
        this.unicornsService.getAllWithCapacitiesLabels2().subscribe(unicorns => {
            this.unicorns = unicorns;
        });
    }

    public updateUnicorn(unicorn: Unicorn): void {
        this.unicornsService.update(unicorn).subscribe(updatedUnicorn => {
            this.unicorns = this.unicorns.filter(u => u.id !== unicorn.id).concat(updatedUnicorn);
        });
    }
}
