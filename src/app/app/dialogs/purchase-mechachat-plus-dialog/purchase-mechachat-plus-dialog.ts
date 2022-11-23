import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { AuthService } from '../../../services/auth.service';

import { Component, Injectable, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-purchase-mechachat-plus-dialog',
  templateUrl: './purchase-mechachat-plus-dialog.html',
  styleUrls: ['./purchase-mechachat-plus-dialog.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurchaseMechachatPlusDialog implements OnInit {

  constructor(public authService: AuthService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
