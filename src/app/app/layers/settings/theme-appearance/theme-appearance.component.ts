import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../services/http.service';
import { AuthService } from '../../../../services/auth.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-theme-appearance',
  templateUrl: './theme-appearance.component.html',
  styleUrls: ['./theme-appearance.component.css']
})
export class ThemeAppearanceComponent implements OnInit {
  selectedColorTheme: any = null;

  colorThemes: any[] = [
    {
      "id": "grey",
      "name": "Grey Theme",
      "color": "#5e5e5e"
    },
    {
      "id": "blue",
      "name": "Blue Theme",
      "color": "#004bad"
    },
    {
      "id": "green",
      "name": "Green Theme",
      "color": "#00ad09"
    },
    {
      "id": "orange",
      "name": "Orange Theme",
      "color": "#ad6800"
    },
    {
      "id": "purple",
      "name": "Purple Theme",
      "color": "#5f00ad"
    },
    {
      "id": "red",
      "name": "Red Theme",
      "color": "#ad0000"
    },
    {
      "id": "yellow",
      "name": "Yellow Theme",
      "color": "#ad9300"
    },
  ];

  constructor(private httpService: HttpService, private toastr: ToastrService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    var element = document.getElementById('mechachat-root');

    if (element != null) {
      const htmlElement = document.documentElement;

      setTimeout(() => {
        this.selectedColorTheme = htmlElement.getAttribute("data-theme")!;
      }, 1500);
    }
  }

  async selectTheme(theme: string) {
    const bodyElement = document.body;
    const htmlElement = document.documentElement;

    this.selectedColorTheme = theme;

    const userThemeData = new FormData();

    userThemeData.append('UserId', this.authService.getUserData().userid);

    userThemeData.append(
      'UserEmail',
      this.authService.getUserData().emailaddress
    );

    userThemeData.append(
      'UserAccessToken',
      this.authService.getTokens().accesstoken
    );

    userThemeData.append('UserTheme', this.selectedColorTheme);

    if (theme == 'grey') {
      bodyElement.style.backgroundImage =
<<<<<<< HEAD
        'url(/assets/App/Themes/Default/DefaultThemeGrey.png)';
=======
        'url("https://res.cloudinary.com/mechachat/image/upload/v1670290857/MechaChat%20Solutions/assets/themes/default/DefaultThemeGrey.png")';
>>>>>>> 651e671 (Update design + Start of communties)

        htmlElement.setAttribute("data-theme", "grey");
    } else if (theme == 'blue') {
      bodyElement.style.backgroundImage =
<<<<<<< HEAD
        'url(/assets/App/Themes/Default/DefaultThemeBlue.png)';
=======
        'url("https://res.cloudinary.com/mechachat/image/upload/v1670290857/MechaChat%20Solutions/assets/themes/default/DefaultThemeBlue.png")';
>>>>>>> 651e671 (Update design + Start of communties)

        htmlElement.setAttribute("data-theme", "blue");
    } else if (theme == 'green') {
      bodyElement.style.backgroundImage =
<<<<<<< HEAD
        'url(/assets/App/Themes/Default/DefaultThemeGreen.png)';
=======
        'url("https://res.cloudinary.com/mechachat/image/upload/v1670290857/MechaChat%20Solutions/assets/themes/default/DefaultThemeGreen.png")';
>>>>>>> 651e671 (Update design + Start of communties)

        htmlElement.setAttribute("data-theme", "green");
    } else if (theme == 'orange') {
      bodyElement.style.backgroundImage =
<<<<<<< HEAD
        'url(/assets/App/Themes/Default/DefaultThemeOrange.png)';
=======
        'url("https://res.cloudinary.com/mechachat/image/upload/v1670290857/MechaChat%20Solutions/assets/themes/default/DefaultThemeOrange.png")';
>>>>>>> 651e671 (Update design + Start of communties)

        htmlElement.setAttribute("data-theme", "orange");
    } else if (theme == 'purple') {
      bodyElement.style.backgroundImage =
<<<<<<< HEAD
        'url(/assets/App/Themes/Default/DefaultThemePurple.png)';
=======
        'url("https://res.cloudinary.com/mechachat/image/upload/v1670290857/MechaChat%20Solutions/assets/themes/default/DefaultThemePurple.png")';
>>>>>>> 651e671 (Update design + Start of communties)

        htmlElement.setAttribute("data-theme", "purple");
    } else if (theme == 'red') {
      bodyElement.style.backgroundImage =
<<<<<<< HEAD
        'url(/assets/App/Themes/Default/DefaultThemeRed.png)';
=======
        'url("https://res.cloudinary.com/mechachat/image/upload/v1670290857/MechaChat%20Solutions/assets/themes/default/DefaultThemeRed.png")';
>>>>>>> 651e671 (Update design + Start of communties)

        htmlElement.setAttribute("data-theme", "red");
    } else if (theme == 'yellow') {
      bodyElement.style.backgroundImage =
<<<<<<< HEAD
        'url(/assets/App/Themes/Default/DefaultThemeYellow.png)';
=======
        'url("https://res.cloudinary.com/mechachat/image/upload/v1670290857/MechaChat%20Solutions/assets/themes/default/DefaultThemeYellow.png")';
>>>>>>> 651e671 (Update design + Start of communties)

        htmlElement.setAttribute("data-theme", "yellow");
    }

<<<<<<< HEAD
    await this.httpService.sendPostAsync("user/update/theme/default", userThemeData).then((response) => {
=======
    await this.httpService.sendPostAsync("user/update/theme/default", userThemeData, {
      headers: {
        Authorization: `User ${this.authService.getTokens().accesstoken}`,
      }
    }).then((response) => {
>>>>>>> 651e671 (Update design + Start of communties)
      this.toastr.success(`Theme Updated!`, 'Success');
    });
  }
}
