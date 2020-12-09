import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AddCapacityDialogComponent } from './add-capacity-dialog/add-capacity-dialog.component';
import { NavComponent } from './nav.component';

@NgModule({
    declarations: [NavComponent, AddCapacityDialogComponent],
    imports: [
        CommonModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        TranslateModule,
        RouterModule,

        // 💡 for addCapacity dialog
        MatDialogModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
    ],
    exports: [NavComponent],
})
export class NavModule {}
