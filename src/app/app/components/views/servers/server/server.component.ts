import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-server-home',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  pageType: string = 'serverHome';
  pageServerId: string = '';
  pageChannelId: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.forEach((param: Params) => {
      this.pageServerId = param["server"];
    });
  }

}
