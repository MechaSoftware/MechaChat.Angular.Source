import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AddACommunityDialog } from "./add-a-community-dialog.component";

describe("AddACommunityDialog", () => {
  let component: AddACommunityDialog;
  let fixture: ComponentFixture<AddACommunityDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddACommunityDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AddACommunityDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
