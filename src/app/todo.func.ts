import { InjectionToken } from "@angular/core";

export function todo(service){
  return (input)=>{
    return input + service.getString();
  }
}
const TodoInjector = new InjectionToken<Function>("test");
export default TodoInjector;