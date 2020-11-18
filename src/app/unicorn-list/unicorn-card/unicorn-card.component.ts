import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Unicorn } from '../../shared/models/unicorn.model';

@Component({
    selector: 'app-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss', '../../shared/styles/unicorns-and-poneys.scss'],
})
export class UnicornCardComponent implements OnInit, OnChanges {
    @Input() public unicorn: Unicorn | undefined;
    @Output() private deleted = new EventEmitter<void>();
    public age = 0;
    public currentYear = new Date().getFullYear();

    constructor() {
        // Step 1
        console.log(this.unicorn);
    }

    ngOnChanges(changes: SimpleChanges): void {
        // Step 2
        this.age = new Date().getFullYear() - changes.unicorn?.currentValue?.birthyear;
    }

    ngOnInit(): void {
        // Step 3 avec mes Inputs de renseignés
        console.log(this.unicorn);
    }

    public deleteUnicorn(): void {
        this.deleted.emit();
    }
}
