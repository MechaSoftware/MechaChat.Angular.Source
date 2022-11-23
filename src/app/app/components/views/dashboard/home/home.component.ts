import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthService } from '../../../../../services/auth.service';
import { HttpService } from '../../../../../services/http.service';

import * as ClipboardJS from 'clipboard';

import { Status } from '../../../../../shared/EStatus';

import * as crypto from 'crypto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: { class: 'app-home' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  pageType: string = 'home';
  pageChannelId: string = '';
  pageServerId: string = '';

  constructor(
    public authService: AuthService,
    public dialog: MatDialog,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {}
}
