import { Component } from '@angular/core';
import { ProfileService } from '../proflie.service';

@Component({
  selector: 'app-guest-card',
  templateUrl: './guest-card.component.html',
  styleUrls: ['./guest-card.component.scss']
})
export class GuestCardComponent {

  constructor(private profileService: ProfileService) { }

  login() {
    this.profileService.login();
  }

}
