import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Params } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "app-community-home",
  templateUrl: "./community.component.html",
  styleUrls: ["./community.component.css"],
})
export class CommunityComponent implements OnInit {
  pageType: string = "communityHome";
  pageCommunityId: string = "";
  pageChannelId: string = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.forEach((param: Params) => {
      this.pageCommunityId = param["community"];
    });
  }
}
