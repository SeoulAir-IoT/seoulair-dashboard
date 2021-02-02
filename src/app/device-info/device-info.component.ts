import { Component } from '@angular/core';
import { DeviceStationsService } from '../device-stations/device-stations.service';


@Component({
    selector: 'device-info',
    templateUrl: 'device-info.component.html',
    styleUrls: ['device-info.component.scss']
})
export class DeviceInfoComponent {
    public _isSensorOn: boolean = false;
    public _deviceName: string = "";
    public _readingDelayMs: number = 0;

    public constructor(private _deviceStationsService: DeviceStationsService) {
    }

    setDeviceToggle(): void {
        this._deviceStationsService.isSensorOn().subscribe(result => this._isSensorOn = result);
    }

    setDeviceParameters(): void{
        this._deviceStationsService.getDeviceParameters().subscribe(result=>{
            this._deviceName=result.name;
            this._readingDelayMs=result.readingDelayMs});
    }

    onDeviceToggleChange(event: any) {
        if (event.checked)
            this._deviceStationsService.turnSensorOn().subscribe();
        else 
            this._deviceStationsService.turnSensorOff().subscribe();

        this._isSensorOn = event.checked
    }

    ngOnInit() {
        this.setDeviceToggle();
        this.setDeviceParameters();
    }
}