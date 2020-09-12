import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home3rd1st';
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
}
