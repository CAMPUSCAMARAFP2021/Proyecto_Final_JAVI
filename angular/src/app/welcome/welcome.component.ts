import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  title: string = 'Hola Mundo';
  counter: number = 0;
  interval: any;

  soyUnObservable: Observable<string> = new Observable();

  constructor() {
    
  }

  increase() {
    this.counter++;
  }

  ngOnInit(): void {
    this.interval = setInterval(this.increase.bind(this),1000);
    this.soyUnObservable.subscribe((title) => this.title = title)
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
