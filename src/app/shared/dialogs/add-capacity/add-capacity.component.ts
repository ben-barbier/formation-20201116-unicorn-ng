import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CapacitiesService } from '../../services/capacities.service';

@Component({
    selector: 'app-add-capacity',
    templateUrl: './add-capacity.component.html',
    styleUrls: ['./add-capacity.component.scss'],
})
export class AddCapacityComponent {
    public addCapacityForm: FormGroup;

    constructor(
        fb: FormBuilder,
        private capacitiesService: CapacitiesService,
        private dialogRef: MatDialogRef<AddCapacityComponent>,
    ) {
        this.addCapacityForm = fb.group({
            label: ['', Validators.required],
        });
    }

    public addCapacity(): void {
        this.capacitiesService
            .create({
                label: this.addCapacityForm.controls.label.value as string,
            })
            .subscribe(() => this.dialogRef.close());
    }
}
