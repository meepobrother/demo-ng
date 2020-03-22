import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppService { 
    hello(){
        console.log(`app hello`)
    }
}