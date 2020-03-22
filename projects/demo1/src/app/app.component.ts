import { Component, ɵcreateInjector, Injector, ViewContainerRef, Injectable } from '@angular/core';
import { DemoService } from './demo/demo.module';

@Component({
  selector: 'app-root',
  template: `{{title}} <button (click)="doTest()">测试</button>`
})
export class AppComponent {
  title = 'hello mini angular!';

  constructor(private injector: Injector, private view: ViewContainerRef) { }

  doTest() {
    import('./demo/demo.module').then(res => {
      const injector = ɵcreateInjector(res.DemoModule, this.injector);
      const service = injector.get(DemoService)
      service.hello()
    })
  }
}
