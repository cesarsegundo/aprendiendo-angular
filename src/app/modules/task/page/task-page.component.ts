import { Component } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent {
  // showText = true
  // changeText(){
  //   this.showText = !this.showText
  // }
  case:number = 4
  results:Array<string> = [
  ]
  listUser:Array<{id:string, name:string}> = [
    {
      id: '1',
      name: 'Cesar'
    },
    {
      id: '2',
      name: 'Uriel'
    }
  ]
}
