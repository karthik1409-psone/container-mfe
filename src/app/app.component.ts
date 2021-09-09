import { Component } from '@angular/core';
import * as hello from 'karthikhellomodule';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = "";

  ngOnInit()
  {
    this.message = hello.SayHello();
  }
}
