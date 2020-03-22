import { Injectable, NgModule } from '@angular/core';
import { AppService } from '../app.service';
@Injectable()
export class DemoService {
    constructor(private appService: AppService){}
    hello() {
        this.appService.hello()
        console.log(`demo hello`)
    }
}
@NgModule({
    providers: [
        DemoService
    ]
})
export class DemoModule { }