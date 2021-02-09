import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DeviceStationsService } from './device-stations.service';

@Component({
    selector: 'device-stations',
    templateUrl: 'device-stations.component.html',
    styleUrls: ['device-stations.component.scss'],
})
export class DeviceStationsComponent implements OnInit {
    public _stations: string[] = [];
    public _signalLightName: string = '';
    public _defaultColor: string = '';
    public _isStationOn: boolean = false;
    public _stationID: string = '';
    public _stationColor: string = '';
    public _stationChoosen: boolean = false;

    @Output() btnRefreshClicked = new EventEmitter<void>();

    constructor(private _deviceStationsService: DeviceStationsService) {}

    setSignalLightParameters(): void {
        this._deviceStationsService
            .getSignalLightParameters()
            .subscribe((result) => {
                this._stations = result.stationCodes;
                this._signalLightName = result.name;
                this._defaultColor = result.defaultColor;
                this._stationColor = this._defaultColor;
            });
    }

    setStationData(event: any) {
        this._stationID = event.value;
        this.setSignalLightToggle(event.value);
        this.setSignalLightStationColor(event.value);
        this._stationChoosen = true;
    }

    setSignalLightToggle(value: string): void {
        this._deviceStationsService
            .isStationOn(value)
            .subscribe((result) => (this._isStationOn = result));
    }

    setSignalLightStationColor(value: string): void {
        this._deviceStationsService
            .getSignalLightActiveColor(value)
            .subscribe((result) => (this._stationColor = result));
    }

    onStationToggleChange(event: any) {
        if (event.checked) {
            this._deviceStationsService
                .turnStationOn(this._stationID)
                .subscribe();
        } else {
            this._deviceStationsService
                .turnStationOff(this._stationID)
                .subscribe();
        }
        this._isStationOn = event.checked;
    }

    onDeviceRefreshBtnClick() {
        if (this._stationChoosen) {
            this.setSignalLightToggle(this._stationID);
            this.setSignalLightStationColor(this._stationID);
            this.btnRefreshClicked.emit();
        } else {
            alert('First choose a station!');
        }
    }

    ngOnInit() {
        this.setSignalLightParameters();
    }
}
