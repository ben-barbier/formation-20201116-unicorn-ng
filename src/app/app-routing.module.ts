import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
    {
        path: 'unicorns',
        loadChildren: () => import('./pages/unicorn-list/unicorn-list.module').then(m => m.UnicornListModule),
    },
    {
        path: 'unicorn',
        loadChildren: () => import('./pages/unicorn-details/unicorn-details.module').then(m => m.UnicornDetailsModule),
    },
    {
        path: 'admin',
        loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
        canLoad: [AuthGuard],
    },
    { path: '**', redirectTo: 'unicorns' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
