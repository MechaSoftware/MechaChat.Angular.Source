import { Component, OnInit } from '@angular/core';

import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  public isShowingSettingsScreen = false;
  isUsingBrowser: boolean = false;
  isUsingWindows: boolean = false;
  isUsingMacOS: boolean = false;

  constructor(private settingsService: SettingsService) {}

  toggleSettingsScreen = (toggleShow: boolean): void => {
    this.isShowingSettingsScreen = toggleShow;
  };

  ngAfterViewInit(): void {
    var element = document.getElementById('mechachat-root');

    if (element != null) {
      var rootElementClasses = element.classList as DOMTokenList;

      setTimeout(() => {
        this.isUsingWindows = rootElementClasses.contains('is_windows');
        this.isUsingMacOS = rootElementClasses.contains('is_macos');
        this.isUsingBrowser = rootElementClasses.contains('is_browser');

        //console.log(`Windows: ${rootElementClasses.contains('is_windows')}`);
        //console.log(`MacOS: ${rootElementClasses.contains('is_macos')}`);
        //console.log(`Browser: ${rootElementClasses.contains('is_browser')}`);
      }, 2000);
    }
  }

  ngOnInit(): void {
    this.settingsService.subscribe((res: any) => {
      this.toggleSettingsScreen(res);
    });
  }
}
