import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Injectable,
} from "@angular/core";

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { AuthService } from "../../../services/auth.service";
import { HttpService } from "../../../services/http.service";

import { ChangeMyStatusDialog } from "../../dialogs/change-my-status-dialog/change-my-status-dialog";
import { AddACommunityDialog } from "../../dialogs/add-a-community-dialog/add-a-community-dialog";

import * as ClipboardJS from "clipboard";

import { Status } from "../../../shared/EStatus";

import { SettingsService } from "../../layers/settings/settings.service";
import { DashboardStatusService } from "./dashboard.status.service";

@Injectable({
  providedIn: "root",
})
@Component({
  selector: "dashboard-layout",
  templateUrl: "./dashboard.layout.html",
  styleUrls: ["./dashboard.layout.css"],
  host: { class: "dashboard-layout" },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayout implements OnInit {
  @Input() currentPageType: string = "";
  @Input() currentPageChannelId: string = "";
  @Input() currentPageCommunityId: string = "";

  name: string = "";
  discriminator: string = "";
  avatar: string = "";
  identifier: string = "";
  status: number = 0;
  mood: string = "";
  statusStr: string = "";
  statusMsg: string = "";
  systemRoles: any = "";
  systemTheme: string = "";

  hardcoded_communities: any = [];

  hasDevRole: boolean = false;

  selectedStatus: string = "";
  selectedMood: string = "";
  selectedStatusMsg: string = "";

  constructor(
    public authService: AuthService,
    public dialog: MatDialog,
    private httpService: HttpService,
    private settingsService: SettingsService,
    private statusService: DashboardStatusService
  ) {
    this.name = `${authService.getUserData().username}`;
    this.discriminator = `#${authService.getUserData().discriminator}`;
    this.avatar = `${authService.getUserData().avatar}`;
    this.identifier = `${authService.getUserData().userid}`;
    this.status = authService.getUserData().status;
    this.mood = `${authService.getUserData().mood || "Happy"}`;
    this.statusMsg = `${authService.getUserData().statusMsg || ""}`;
    this.systemRoles = JSON.parse(
      `${authService.getUserData().systemroles || ""}`
    );
    this.systemTheme = `${
      authService.getUserData().systemtheme || "default_white"
    }`;
    this.hardcoded_communities = [
      {
        id: "1",
        name: "Mecha Solutions",
        abbv: "MS",
        icon: "c_rlj6gz7smk9yko4909hoj36bkgjr6hqt",
        unread: true,
        mentions: 0,
        active: false,
      },
      {
        id: "2",
        name: "Mecha Solutions Test 1",
        abbv: "MST",
        icon: null,
        unread: true,
        mentions: 2,
        active: false,
      },
      {
        id: "3",
        name: "Mecha Solutions Test 3",
        abbv: "MST3",
        icon: null,
        unread: false,
        mentions: 0,
        active: true,
      },
      {
        id: "4",
        name: "Mecha Solutions Test 4",
        abbv: "MST4",
        icon: null,
        unread: false,
        mentions: 0,
        active: false,
      },
    ];
  }

  updateStatus = (data: any): void => {
    if (data.method === "tooltipMsg") {
      this.mood = data.data;
      this.selectedMood = data.data;
    } else if (data.method === "statusMsg") {
      const statusMessageSpan = document.getElementById(
        "custom-status-message"
      ) as HTMLSpanElement;

      this.statusMsg = data.data;
      this.selectedStatusMsg = data.data;
      statusMessageSpan.innerHTML = data.data;
    }
  };

  ngOnInit(): void {
    this.statusService.subscribe((res: any) => {
      this.updateStatus(res);
    });

    this.selectedStatusMsg = this.statusMsg;

    if (this.statusMsg.length > 0) {
      this.statusMsg = `| ${this.statusMsg}`;
    } else {
      this.statusMsg = "";
    }

    if (Number(this.status) == Number(Status.Offline)) {
      this.statusStr = "⬛ Invisible";
      this.selectedStatus = "0";
    } else if (Number(this.status) == Number(Status.Online)) {
      this.statusStr = "🟩 Online";
      this.selectedStatus = "1";
    } else if (Number(this.status) == Number(Status.DND)) {
      this.statusStr = "🟥 Do Not Disturb";
      this.selectedStatus = "2";
    } else if (Number(this.status) == Number(Status.Idle)) {
      this.statusStr = "🟨 Idle";
      this.selectedStatus = "3";
    }

    if (this.systemRoles.includes("DEV")) {
      this.hasDevRole = true;
    } else {
      this.hasDevRole = false;
    }

    var userNameCopy = `${this.name}${this.discriminator}`;

    new ClipboardJS(".my-user-profile-username-copy", {
      text: function () {
        return `${userNameCopy}`;
      },
    });
  }

  openChangeStatusDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.width = "500px";
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = "change-status-modal";

    this.dialog.open(ChangeMyStatusDialog, dialogConfig);
  }

  openAddACommunityDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.width = "500px";
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = "dialog-add-a-community";

    this.dialog.open(AddACommunityDialog, dialogConfig);
  }

  showSettingsScreen() {
    this.settingsService.showSettings();
  }

  ngAfterViewInit(): void {
    const bodyElement = document.body;
    const htmlElement = document.documentElement;

    if (this.systemTheme == "default_grey") {
      bodyElement.style.backgroundImage =
        'url("https://res.cloudinary.com/mechachat/image/upload/v1670290857/MechaChat%20Solutions/assets/themes/default/DefaultThemeGrey.png")';

      htmlElement.setAttribute("data-theme", "grey");
    } else if (this.systemTheme == "default_blue") {
      bodyElement.style.backgroundImage =
        'url("https://res.cloudinary.com/mechachat/image/upload/v1670290857/MechaChat%20Solutions/assets/themes/default/DefaultThemeBlue.png")';

      htmlElement.setAttribute("data-theme", "blue");
    } else if (this.systemTheme == "default_green") {
      bodyElement.style.backgroundImage =
        'url("https://res.cloudinary.com/mechachat/image/upload/v1670290857/MechaChat%20Solutions/assets/themes/default/DefaultThemeGreen.png")';

      htmlElement.setAttribute("data-theme", "green");
    } else if (this.systemTheme == "default_orange") {
      bodyElement.style.backgroundImage =
        'url("https://res.cloudinary.com/mechachat/image/upload/v1670290857/MechaChat%20Solutions/assets/themes/default/DefaultThemeOrange.png")';

      htmlElement.setAttribute("data-theme", "orange");
    } else if (this.systemTheme == "default_purple") {
      bodyElement.style.backgroundImage =
        'url("https://res.cloudinary.com/mechachat/image/upload/v1670290857/MechaChat%20Solutions/assets/themes/default/DefaultThemePurple.png")';

      htmlElement.setAttribute("data-theme", "purple");
    } else if (this.systemTheme == "default_red") {
      bodyElement.style.backgroundImage =
        'url("https://res.cloudinary.com/mechachat/image/upload/v1670290857/MechaChat%20Solutions/assets/themes/default/DefaultThemeRed.png")';

      htmlElement.setAttribute("data-theme", "red");
    } else if (this.systemTheme == "default_yellow") {
      bodyElement.style.backgroundImage =
        'url("https://res.cloudinary.com/mechachat/image/upload/v1670290857/MechaChat%20Solutions/assets/themes/default/DefaultThemeYellow.png")';

      htmlElement.setAttribute("data-theme", "yellow");
    }

    const avatarImg = document.getElementById(
      "my-avatar-img-40"
    ) as HTMLImageElement;

    const profileMood = document.getElementById(
      "my-avatar-img-40-mood-icon"
    ) as HTMLSpanElement;

    if (Number(this.status) == Number(Status.Offline)) {
      avatarImg.style.setProperty("--avatar-ring-color", "#747F8D");
    } else if (Number(this.status) == Number(Status.Online)) {
      avatarImg.style.setProperty("--avatar-ring-color", "#3BA55D");
    } else if (Number(this.status) == Number(Status.DND)) {
      avatarImg.style.setProperty("--avatar-ring-color", "#ED4244");
    } else if (Number(this.status) == Number(Status.Idle)) {
      avatarImg.style.setProperty("--avatar-ring-color", "#FAA819");
    }

    if (this.mood == "Happy") {
      profileMood.innerHTML = "😃";
    } else if (this.mood == "Angry") {
      profileMood.innerHTML = "😠";
    } else if (this.mood == "Sad") {
      profileMood.innerHTML = "😢";
    } else if (this.mood == "Sleeping") {
      profileMood.innerHTML = "😴";
    }
  }

  sidebarActionsMenuIcon: string = "chevron_left";

  toggleSidebarCloseIcon() {
    this.sidebarActionsMenuIcon = "chevron_left";
  }

  toggleSidebarOpenIcon() {
    this.sidebarActionsMenuIcon = "chevron_right";
  }
}
