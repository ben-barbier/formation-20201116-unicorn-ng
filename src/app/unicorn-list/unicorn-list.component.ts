import { Component } from '@angular/core';
import { Unicorn } from '../shared/models/unicorn.model';
import { UnicornsService } from '../shared/services/unicorns.service';

@Component({
    selector: 'app-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss'],
})
export class UnicornListComponent {
    public unicorns: Unicorn[] = [];

    constructor(unicornsService: UnicornsService) {
        unicornsService.getAll().subscribe(unicorns => {
            this.unicorns = unicorns;
        });
    }

    public removeUnicornFromList(unicornToDelete: Unicorn): void {
        this.unicorns = this.unicorns.filter(unicorn => unicorn.id !== unicornToDelete.id);
    }
}
