import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'start',
        loadComponent: () =>
            import('./pages/start/start.component')
                .then(m => m.StartComponent)
    },
    {
        path: 'form',
        loadComponent: () =>
            import('./pages/form/form.component')
                .then(m => m.FormComponent)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'start'
    },
];
