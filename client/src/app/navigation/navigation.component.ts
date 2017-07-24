import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bb-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  private navTitle: string = "Gastronaut";

  constructor() { }

  ngOnInit() {
  }

}
