import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnicornDetailsComponent } from './pages/unicorn-details/unicorn-details.component';
import { UnicornListComponent } from './pages/unicorn-list/unicorn-list.component';
import { LegalAgeGuard } from './shared/guards/legal-age.guard';

const routes: Routes = [
    { path: 'unicorns', component: UnicornListComponent },
    { path: 'unicorn/:id', component: UnicornDetailsComponent, canActivate: [LegalAgeGuard] },
    { path: '**', redirectTo: 'unicorns' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
