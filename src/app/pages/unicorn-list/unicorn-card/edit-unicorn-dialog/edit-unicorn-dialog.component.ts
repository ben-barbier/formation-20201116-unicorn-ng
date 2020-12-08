import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Unicorn } from '../../../../shared/models/unicorn.model';

@Component({
    selector: 'app-edit-unicorn-dialog',
    templateUrl: './edit-unicorn-dialog.component.html',
    styleUrls: ['./edit-unicorn-dialog.component.scss'],
})
export class EditUnicornDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<EditUnicornDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { unicorn: Unicorn },
    ) {}

    public updateUnicorn(formFields: { name: string; birthYear: number }): void {
        this.dialogRef.close(formFields);
    }
}
