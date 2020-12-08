import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MagicalNameModule } from '../../shared/pipes/magical-name/magical-name.module';
import { UnicornDetailsRoutingModule } from './unicorn-details-routing.module';
import { UnicornDetailsComponent } from './unicorn-details.component';

@NgModule({
    declarations: [UnicornDetailsComponent],
    imports: [CommonModule, UnicornDetailsRoutingModule, MagicalNameModule],
})
export class UnicornDetailsModule {}
