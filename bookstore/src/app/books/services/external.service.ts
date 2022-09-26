import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class ExternalService {
    constructor() { }

    public status: boolean = false;

    public sharedData : string = '';
}