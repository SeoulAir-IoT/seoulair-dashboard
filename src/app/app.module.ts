import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input/';
import { MatSlideToggleModule } from '@angular/material/slide-toggle/'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import {StationInfoComponent} from './station-info/station-info.component';
import { DeviceManagementComponent } from './device-management/device-management.component';
import { DeviceInfoComponent } from "./device-info/device-info.component";
import { NotificationsTableComponent } from './notifications-table/notifications-table.component';
import { DeviceStationsComponent } from './device-stations/device-stations.component';

import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DeviceManagementComponent,
    DeviceInfoComponent,
    DeviceStationsComponent,
    StationInfoComponent,
    NotificationsTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
