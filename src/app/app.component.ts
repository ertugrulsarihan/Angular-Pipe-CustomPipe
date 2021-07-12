import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  title: string = 'Pipe Using';
  date: Date = new Date("2021-07-12");
  price: number = 450;

  name: string = 'Ertugrul'
  name2: string = 'Salih'
  name3: string = 'Furkan'
  name4: string = 'Buse'
  name5: string = 'Pelin'
}
