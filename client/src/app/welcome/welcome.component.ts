import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/users.service';

@Component({
  selector: 'bb-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  providers: [UserService]
})


export class WelcomeComponent implements OnInit {
  public pageTitle: string = 'Welcome';
  public users: any = [];

  constructor(private _userService: UserService) {

  }

  ngOnInit() {

    let users = this._userService.getList();

    users
      .map((data) => data.json())
      .subscribe((data) => this.users = data);

    console.log('resp json' ,this.users);
  }

}
