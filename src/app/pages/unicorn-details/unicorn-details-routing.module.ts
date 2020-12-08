import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalAgeGuard } from '../../shared/guards/legal-age.guard';
import { UnicornDetailsComponent } from './unicorn-details.component';

const routes: Routes = [{ path: ':id', component: UnicornDetailsComponent, canActivate: [LegalAgeGuard] }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UnicornDetailsRoutingModule {}
