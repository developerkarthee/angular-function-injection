import { Component, VERSION, Inject, Injector } from '@angular/core';
import  TodoInjector, {}  from './todo.func';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 
  token2 : string;
  token1 : string;

  constructor(@Inject(TodoInjector) test : Function, injector : Injector){
    /*method 1 using @inject decorator*/
    this.token1 = (test('Injection toke type (1) '+ "\t") );
    /*method 2 using injector service*/
    this.token2 = injector.get<Function>(TodoInjector)('Injection toke type (2)'  + "\t");
  }
}
