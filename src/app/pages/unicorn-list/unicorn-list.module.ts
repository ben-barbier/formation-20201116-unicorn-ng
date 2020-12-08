import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MagicalNameModule } from '../../shared/pipes/magical-name/magical-name.module';
import { EditUnicornDialogComponent } from './unicorn-card/edit-unicorn-dialog/edit-unicorn-dialog.component';
import { UnicornCardComponent } from './unicorn-card/unicorn-card.component';
import { UnicornListRoutingModule } from './unicorn-list-routing.module';
import { UnicornListComponent } from './unicorn-list.component';

@NgModule({
    declarations: [UnicornListComponent, UnicornCardComponent, EditUnicornDialogComponent],
    imports: [
        CommonModule,
        UnicornListRoutingModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        MagicalNameModule,
    ],
})
export class UnicornListModule {}
