import { Component } from '@angular/core';
import { ProfileService } from '../proflie.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  constructor(private profileService: ProfileService) { }

  logout() {
    this.profileService.logout();
  }

}
