import { Component } from '@angular/core';

@Component({
    selector:'data-management',
    templateUrl:'data-management.component.html',
    styleUrls:['data-management.component.scss'],
})
export class DataManagementComponent{
    public _orders:string[]=[];
    public _options:string[]=[];


    public constructor(){
        
    }
}