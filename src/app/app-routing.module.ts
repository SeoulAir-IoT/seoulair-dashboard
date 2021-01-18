import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceManagementComponent } from './device-management/device-management.component';
import { StationInfoComponent } from './station-info/station-info.component';
import { NotificationsTableComponent } from './notifications-table/notifications-table.component'

const routes: Routes = [
  { path: '', redirectTo: '/device', pathMatch: 'full' },
  { path: 'device', component: DeviceManagementComponent },
  { path: 'station-info', component: StationInfoComponent },
  { path: 'notifications-table', component: NotificationsTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
