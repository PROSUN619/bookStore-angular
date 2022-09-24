import { Injectable } from "@angular/core";

// @Injectable({
//     providedIn: 'any'
// })
// Note: if application is using eager loading there is difference between service type 
// any and root. only single instance every time
// but in lazy loading serice type any will create separate instance 
@Injectable()
export class CounterService {

    public counter: number = 0;

    constructor() { }

    public incCounter(): void {
        this.counter++;
    }

    public decCounter(): void {
        this.counter--;
    }
}