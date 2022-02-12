<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> 33f497f (initial commit)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< HEAD
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isUsingElectronApp: string = '';
  electronWindow: any;

  constructor(private window: Window) {
    this.electronWindow = window.electron || null;

    if (this.electronWindow != null) {
      this.isUsingElectronApp = this.electronWindow.data.isLoadedInApp;
    } else {
      this.isUsingElectronApp = 'browser';
    }
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    var element = document.getElementById('mechachat-root');

    if (element != null) {
      element.classList.add(`is_${this.isUsingElectronApp}`);
    }

    if (this.electronWindow != null) {
      var electronWindow1 = this.electronWindow;

      var closeControlBtn_Win = document.getElementById('control-bar-close');
      var maxControlBtn_Win = document.getElementById('control-bar-max');
      var minusControlBtn_Win = document.getElementById('control-bar-minus');

      if (closeControlBtn_Win != null) {
        closeControlBtn_Win.addEventListener('click', function () {
          electronWindow1.windowClose();
        });
      }

      if (maxControlBtn_Win != null) {
        maxControlBtn_Win.addEventListener('click', function () {
          electronWindow1.windowMax();
        });
      }

      if (minusControlBtn_Win != null) {
        minusControlBtn_Win.addEventListener('click', function () {
          electronWindow1.windowMin();
        });
      }
    }
  }
=======
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
>>>>>>> 33f497f (initial commit)
}
