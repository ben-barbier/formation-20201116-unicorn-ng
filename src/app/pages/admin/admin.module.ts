import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
    declarations: [AdminComponent],
    imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
