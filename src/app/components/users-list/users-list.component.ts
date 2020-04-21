import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/User';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'cyf-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {

  public users: User[];
  private subscription: Subscription;

  constructor(private userService: UserService) { }
   ngOnInit() {
    this.subscription = this.userService.getUsers().subscribe((res:User[]) => this.users = res);
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
