import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css'],
})
export class SplashScreenComponent implements OnInit {
  constructor() {}

  public showSplash = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.showSplash = !this.showSplash;
    }, 3000);
  }
}
