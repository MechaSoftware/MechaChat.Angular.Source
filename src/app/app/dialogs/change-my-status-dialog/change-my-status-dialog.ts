import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  Injectable,
} from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthService } from '../../../services/auth.service';
import { HttpService } from '../../../services/http.service';

import { ToastrService } from 'ngx-toastr';

import { DashboardStatusService } from '../../layouts/dashboard/dashboard.status.service';

import { Status } from '../../../shared/EStatus';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'dialog-change-status',
  templateUrl: './change-my-status-dialog.html',
  styleUrls: ['./change-my-status-dialog.css'],
  host: { class: 'dialog-change-status' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeMyStatusDialog implements OnInit {
  status: number = 0;
  mood: string = '';
  statusStr: string = '';
  statusMsg: string = '';

  selectedStatus: string = '';
  selectedMood: string = '';
  selectedStatusMsg: string = '';

  constructor(
    public authService: AuthService,
    public dialog: MatDialog,
    private httpService: HttpService,
    private toastr: ToastrService,
    private statusService: DashboardStatusService
  ) {
    this.status = authService.getUserData().status;
    this.mood = `${authService.getUserData().mood || 'Happy'}`;
    this.statusMsg = `${authService.getUserData().statusMsg || ''}`;
  }

  ngOnInit(): void {
    this.selectedStatusMsg = this.statusMsg;

    if (Number(this.status) == Number(Status.Offline)) {
      this.statusStr = 'Invisible';
      this.selectedStatus = '0';
    } else if (Number(this.status) == Number(Status.Online)) {
      this.statusStr = 'Online';
      this.selectedStatus = '1';
    } else if (Number(this.status) == Number(Status.DND)) {
      this.statusStr = 'Do Not Disturb';
      this.selectedStatus = '2';
    } else if (Number(this.status) == Number(Status.Idle)) {
      this.statusStr = 'Idle';
      this.selectedStatus = '3';
    }

    if (this.mood == 'Happy') {
      this.selectedMood = 'Happy';
    } else if (this.mood == 'Angry') {
      this.selectedMood = 'Angry';
    } else if (this.mood == 'Sad') {
      this.selectedMood = 'Sad';
    } else if (this.mood == 'Sleeping') {
      this.selectedMood = 'Sleeping';
    }
  }

  async saveNewStatus() {
    var newUserData = this.authService.getUserData();
    newUserData.status = Number(this.selectedStatus);
    newUserData.statusMsg = this.selectedStatusMsg;
    newUserData.mood = this.selectedMood;

    this.authService.setUserData(newUserData);

    const userStatusData = new FormData();
    userStatusData.append('UserId', this.authService.getUserData().userid);
    userStatusData.append(
      'UserEmail',
      this.authService.getUserData().emailaddress
    );
    userStatusData.append(
      'UserAccessToken',
      this.authService.getTokens().accesstoken
    );
    userStatusData.append('UserStatus', this.selectedStatus);
    userStatusData.append('UserStatusMsg', this.selectedStatusMsg);
    userStatusData.append('UserMood', this.selectedMood);

    await this.httpService
      .sendPostAsync(`user/update/status`, userStatusData, {
        headers: {
          Authorization: `User ${this.authService.getTokens().accesstoken}`,
        }
      })
      .then((response) => {
        const avatarImg = document.getElementById(
          'my-avatar-img-40'
        ) as HTMLImageElement;

        const profileMood = document.getElementById(
          'my-avatar-img-40-mood-icon'
        ) as HTMLSpanElement;

        if (this.selectedStatusMsg.length >= 1) {
          this.statusMsg = this.selectedStatusMsg;
          this.statusService.updateStatusMessage(`| ${this.selectedStatusMsg}`);
        } else {
          this.statusMsg = '';
          this.statusService.updateStatusMessage('');
        }

        if (this.selectedMood == 'Happy') {
          profileMood.innerHTML = '😃';
          this.mood = 'Happy';
          this.statusService.updateMoodTooltip('Happy');
        } else if (this.selectedMood == 'Angry') {
          profileMood.innerHTML = '😠';
          this.mood = 'Angry';
          this.statusService.updateMoodTooltip('Angry');
        } else if (this.selectedMood == 'Sad') {
          profileMood.innerHTML = '😢';
          this.mood = 'Sad';
          this.statusService.updateMoodTooltip('Sad');
        } else if (this.selectedMood == 'Sleeping') {
          profileMood.innerHTML = '😴';
          this.mood = 'Sleeping';
          this.statusService.updateMoodTooltip('Sleeping');
        }

        if (Number(this.selectedStatus) == Number(Status.Offline)) {
          avatarImg.style.setProperty('--avatar-ring-color', '#747F8D');
          this.statusStr = 'Invisible';
          this.selectedStatus = '0';
        } else if (Number(this.selectedStatus) == Number(Status.Online)) {
          avatarImg.style.setProperty('--avatar-ring-color', '#3BA55D');
          this.statusStr = 'Online';
          this.selectedStatus = '1';
        } else if (Number(this.selectedStatus) == Number(Status.DND)) {
          avatarImg.style.setProperty('--avatar-ring-color', '#ED4244');
          this.statusStr = 'Do Not Disturb';
          this.selectedStatus = '2';
        } else if (Number(this.selectedStatus) == Number(Status.Idle)) {
          avatarImg.style.setProperty('--avatar-ring-color', '#FAA819');
          this.statusStr = 'Idle';
          this.selectedStatus = '3';
        }

        this.toastr.success(`Status Updated!`, 'Success');
      });
  }
}
