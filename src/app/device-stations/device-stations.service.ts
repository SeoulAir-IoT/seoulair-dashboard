import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppResources } from '../common/appResources';
import { SignalLightParametersResult } from '../interfaces/ISignalLightParameters';
import { AirQualitySensorParametersResult } from '../interfaces/IAirQualitySensorParameters';

@Injectable({
    providedIn: 'root',
})
export class DeviceStationsService {
    constructor(private _http: HttpClient) {}

    public isSensorOn(): Observable<boolean> {
        return this._http.get<boolean>(
            AppResources.apiUrl + AppResources.airQualityIsOn
        );
    }

    public turnSensorOn(): Observable<any> {
        return this._http.put<any>(
            AppResources.apiUrl + AppResources.airQualityTurnOn,
            {}
        );
    }

    public turnSensorOff(): Observable<any> {
        return this._http.put<any>(
            AppResources.apiUrl + AppResources.airQualityTurnOff,
            {}
        );
    }

    public getDeviceParameters(): Observable<AirQualitySensorParametersResult> {
        return this._http.get<AirQualitySensorParametersResult>(
            AppResources.apiUrl + AppResources.airQualityParameters
        );
    }

    public updateDeviceName(name: string): Observable<any> {
        return this._http.put<any>(
            AppResources.apiUrl + AppResources.airQualityName + name,
            null
        );
    }

    public updateSensorDelay(delay: number): Observable<any> {
        return this._http.put<any>(
            AppResources.apiUrl + AppResources.airQualityDelay + delay,
            null
        );
    }

    public isStationOn(stationCode: string): Observable<boolean> {
        return this._http.get<boolean>(
            AppResources.apiUrl + AppResources.signalLightIsOn + stationCode
        );
    }

    public turnStationOn(stationCode: string): Observable<any> {
        return this._http.put<any>(
            AppResources.apiUrl + AppResources.signalLightTurnOn + stationCode,
            null
        );
    }

    public turnStationOff(stationCode: string): Observable<any> {
        return this._http.put<any>(
            AppResources.apiUrl + AppResources.signalLightTurnOff + stationCode,
            null
        );
    }

    public getSignalLightParameters(): Observable<SignalLightParametersResult> {
        return this._http.get<SignalLightParametersResult>(
            AppResources.apiUrl + AppResources.signalLightParameters
        );
    }

    public getSignalLightActiveColor(stationCode: string): Observable<any> {
        var endpoint =
            AppResources.apiUrl +
            AppResources.signalLightActiveColor +
            stationCode;
        return this._http.get(endpoint, { responseType: 'text' });
    }
}
