import { Component, OnInit } from '@angular/core';
//import { sequelize } from '../models';


@Component({
  selector: 'bb-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  private navTitle: string = "Gastronaut";

  constructor() { }

  ngOnInit() {

    // sequelize
    // .authenticate()
    // .then(() => {
    //   console.log('Connection has been established successfully.');
    // })
    // .catch(err => {
    //   console.error('Unable to connect to the database:', err);
    // });

  }

}
