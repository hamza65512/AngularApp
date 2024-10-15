import { Routes } from '@angular/router';
import path from 'path';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { MaintenanceComponent } from './Component/maintenance/maintenance.component';
import { ViewDataComponent } from './Component/view-data/view-data.component';

export const routes: Routes = [
    { path: 'maintenance' , component : MaintenanceComponent},
    { path: 'view' , component : ViewDataComponent},
    { path: '', redirectTo: 'maintenance', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
