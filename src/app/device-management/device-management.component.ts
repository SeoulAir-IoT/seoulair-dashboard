import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'device-management',
    templateUrl: 'device-management.component.html',
    styleUrls: ['device-management.component.scss'],
})
export class DeviceManagementComponent {
    eventSubject: Subject<void> = new Subject<void>();
}
