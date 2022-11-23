import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../../services/http.service';
import * as FileSaver from 'file-saver';

const MechaChatLogoSVG = `
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,24.000000) scale(0.003890,-0.006742)" fill="#000000" stroke="none">
    </g>
  </svg>
`;

@Component({
  selector: 'app-root-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private httpService: HttpService,
    private toastr: ToastrService
  ) {
    iconRegistry.addSvgIconLiteral(
      'MechaChatWhite',
      sanitizer.bypassSecurityTrustHtml(MechaChatLogoSVG)
    );
  }

  ngOnInit(): void {}
}
