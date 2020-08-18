import { Injectable } from "@angular/core";

@Injectable()
export default class AppService{
  constructor(){

  }

  getString(){
    return "test";
  }

  getImplicitString(){
    return "test2";
  }
}