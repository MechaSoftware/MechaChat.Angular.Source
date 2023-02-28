import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isUsingElectronApp: string = "";
  electronWindow: any;

  constructor() {
    this.electronWindow = window.electron || null;

    if (this.electronWindow != null) {
      this.isUsingElectronApp = this.electronWindow.data.isLoadedInApp;
    } else {
      this.isUsingElectronApp = "browser";
    }
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    var element = document.getElementById("mechachat-root");

    if (element != null) {
      element.classList.add(`is_${this.isUsingElectronApp}`);
    }

    if (this.electronWindow != null) {
      var electronWindow1 = this.electronWindow;

      if (this.isUsingElectronApp == "windows") {
        var closeControlBtn_Win = document.getElementById("control-bar-close");
        var maxControlBtn_Win = document.getElementById("control-bar-max");
        var minusControlBtn_Win = document.getElementById("control-bar-minus");

        if (closeControlBtn_Win != null) {
          closeControlBtn_Win.addEventListener("click", function () {
            electronWindow1.windowClose();
          });
        }

        if (maxControlBtn_Win != null) {
          maxControlBtn_Win.addEventListener("click", function () {
            electronWindow1.windowMax();
          });
        }

        if (minusControlBtn_Win != null) {
          minusControlBtn_Win.addEventListener("click", function () {
            electronWindow1.windowMin();
          });
        }
      } else if (this.isUsingElectronApp == "macos") {
        var closeControlBtn_Mac = document.getElementById(
          "control-bar-close-mac"
        );
        var minusControlBtn_Mac = document.getElementById(
          "control-bar-minus-mac"
        );
        var maxControlBtn_Mac = document.getElementById("control-bar-max-mac");

        if (closeControlBtn_Mac != null) {
          closeControlBtn_Mac.addEventListener("click", function () {
            electronWindow1.windowClose();
          });
        }

        if (minusControlBtn_Mac != null) {
          minusControlBtn_Mac.addEventListener("click", function () {
            electronWindow1.windowMin();
          });
        }

        if (maxControlBtn_Mac != null) {
          maxControlBtn_Mac.addEventListener("click", function () {
            electronWindow1.windowMax();
          });
        }
      }
    }
  }
}
