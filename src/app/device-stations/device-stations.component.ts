import { Component, OnInit } from '@angular/core';
import { DeviceStationsService } from './device-stations.service';

/*interface Station{
    value:string;
    viewValue:string;
}*/

@Component({
    selector: 'device-stations',
    templateUrl:'device-stations.component.html',
    styleUrls:['device-stations.component.scss']
})
export class DeviceStationsComponent implements OnInit {
    public _stations: string[] =[];
    public _signalLightName: string = "";
    public _defaultColor: string = "";
    public _isStationOn:boolean=false;

    constructor(private _deviceStationsService: DeviceStationsService) {
    }

    setSignalLightParameters(): void {
        this._deviceStationsService.getSignalLightParameters().subscribe(result => {
            this._stations = result.stationCodes;
            this._signalLightName=result.name;
            this._defaultColor=result.defaultColor;
        })
    }

    setSignalLightToggle(event:any):void{
        this._deviceStationsService.isStationOn(event.value).subscribe(result => this._isStationOn=result);
    }

    ngOnInit(){
        this.setSignalLightParameters();
    }
}