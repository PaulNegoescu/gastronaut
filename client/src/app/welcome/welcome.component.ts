import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bb-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public pageTitle: string = 'Welcome';

  constructor() { }

  ngOnInit() {

  }

}
