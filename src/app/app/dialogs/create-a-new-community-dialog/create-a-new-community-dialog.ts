import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  Injectable,
} from "@angular/core";

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { AuthService } from "../../../services/auth.service";
import { HttpService } from "../../../services/http.service";

import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
@Component({
  selector: "create-a-new-community-dialog",
  templateUrl: "./create-a-new-community-dialog.html",
  styleUrls: ["./create-a-new-community-dialog.css"],
  host: { class: "create-a-new-community-dialog" },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateANewCommunityDialog implements OnInit {
  constructor() {}
  visibility: string = "public";

  ngOnInit(): void {}
}
