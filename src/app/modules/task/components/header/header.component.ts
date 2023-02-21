import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   menu: Array<{name:string, router:any}> = [
    {
      name: 'Overview',
      router: []
    },
    {
      name: 'Request', 
      router: []
    },
    {
      name: 'Overview',
      router: []
    },
   ]
}
