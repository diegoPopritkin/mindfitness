import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'start',
        data: { preload: true },
        loadComponent: () =>
            import('./pages/start/start.component')
                .then(m => m.StartComponent)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'start'
    },
];
