import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  Injectable,
} from "@angular/core";

import { AuthService } from "../../../services/auth.service";
import { HttpService } from "../../../services/http.service";

import { ToastrService } from "ngx-toastr";

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { CreateANewCommunityDialog } from "../../dialogs/create-a-new-community-dialog/create-a-new-community-dialog";

@Injectable({
  providedIn: "root",
})
@Component({
  selector: "add-a-community-dialog",
  templateUrl: "./add-a-community-dialog.html",
  styleUrls: ["./add-a-community-dialog.css"],
  host: { class: "add-a-community-dialog" },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddACommunityDialog implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  createANewCommunityDialogOpen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.width = "500px";
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = "dialog-create-a-community";

    this.dialog.open(CreateANewCommunityDialog, dialogConfig);
  }
}
