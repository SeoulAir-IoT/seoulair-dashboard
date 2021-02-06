import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataManagementComponent } from './data-management/data-management.component';
import { DeviceManagementComponent } from './device-management/device-management.component';

const routes: Routes = [
  { path: '', redirectTo: '/device', pathMatch: 'full' },
  { path: 'device', component: DeviceManagementComponent },
  { path: 'data', component: DataManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
