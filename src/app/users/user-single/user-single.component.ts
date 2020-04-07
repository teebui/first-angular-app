import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-single',
  template: `
  <section class="section">
      <div class="container">
      
        <div class="card" *ngIf="user">
          <img [src]="user.avatar_url" />
          <h2>{{ user.login }}</h2>
        </div>
      
      </div>
    </section>
  `,
  styles: [
  ],
})
export class UserSingleComponent implements OnInit {
  user

  constructor(
    private userService: UserService,
    private route: ActivatedRoute) 
    
    { }

  ngOnInit() {
    // grab the username out of the url
    this.route.params.subscribe(params => {
      const username = params['username']

      // user the user service to get data from github
      this.userService
        .getUser(username)
        // bnd that to a user variable
        .subscribe(u => this.user = u)
    })
  }
}
