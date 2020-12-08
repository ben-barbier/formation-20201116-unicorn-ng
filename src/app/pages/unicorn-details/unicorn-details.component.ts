import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornsService } from '../../shared/services/unicorns.service';

@Component({
    selector: 'app-unicorn-details',
    templateUrl: './unicorn-details.component.html',
    styleUrls: ['./unicorn-details.component.scss'],
})
export class UnicornDetailsComponent {
    public unicorn: Unicorn | undefined;

    constructor(route: ActivatedRoute, unicornsService: UnicornsService) {
        route.params
            .pipe(switchMap(params => unicornsService.get(params.id)))
            .subscribe(unicorn => (this.unicorn = unicorn));
    }
}
