import { Component, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DeviceStationsService } from '../device-stations/device-stations.service';

@Component({
    selector: 'device-info',
    templateUrl: 'device-info.component.html',
    styleUrls: ['device-info.component.scss'],
})
export class DeviceInfoComponent {
    public _isSensorOn: boolean = false;
    public _deviceName: string = '';
    public _deviceInputName: string = '';
    public _deviceDelayMs: number = 0;
    public _inputDelayMs: number = 0;

    @Input() btnRefreshClickedSignal: Observable<void> = new Observable();

    public constructor(private _deviceStationsService: DeviceStationsService) {}

    setDeviceData() {
        this.setDeviceToggle();
        this.setDeviceParameters();
    }

    setDeviceToggle(): void {
        this._deviceStationsService
            .isSensorOn()
            .subscribe((result) => (this._isSensorOn = result));
    }

    setDeviceParameters(): void {
        this._deviceStationsService
            .getDeviceParameters()
            .subscribe((result) => {
                this._deviceName = result.name;
                this._deviceInputName = this._deviceName;
                this._deviceDelayMs = result.readingDelayMs;
                this._inputDelayMs = this._deviceDelayMs;
            });
    }

    onDeviceToggleChange(event: any) {
        if (event.checked)
            this._deviceStationsService.turnSensorOn().subscribe();
        else this._deviceStationsService.turnSensorOff().subscribe();

        this._isSensorOn = event.checked;
    }

    onDeviceNameBtnChange() {
        if (this._deviceInputName === this._deviceName) {
            alert('Same name, try a different one!');
        } else {
            this._deviceStationsService
                .updateDeviceName(this._deviceInputName)
                .subscribe();
            this._deviceName = this._deviceInputName;
        }
    }

    onDeviceDelayBtnChange() {
        console.log(this._inputDelayMs, this._deviceDelayMs);
        if (this._inputDelayMs === this._deviceDelayMs) {
            alert('Same value, try a different one!');
        } else {
            this._deviceStationsService
                .updateSensorDelay(this._inputDelayMs)
                .subscribe();
            this._deviceDelayMs = this._inputDelayMs;
        }
    }

    onRefreshButtonClicked() {
        //    console.log("Child recieved: " + this.btnRefreshData);
    }

    ngOnInit() {
        this.btnRefreshClickedSignal.subscribe(() => this.setDeviceData());
        this.setDeviceData();
    }
}
