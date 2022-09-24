import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";
import { ExternalService } from "./external.service";

// @Injectable({
//     providedIn: 'any'
// })
// Note: if application is using eager loading there is difference between service type 
// any and root. only single instance every time
// but in lazy loading serice type any will create separate instance 
@Injectable()
export class Counter2Service {

    public counter: number = 0;

    constructor() {}

    public incCounter(): void {
        this.counter += 2;
    }

    public decCounter(): void {
        this.counter -= 2;
    }
}