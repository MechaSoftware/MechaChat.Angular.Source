import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateANewCommunityDialog } from "./create-a-new-community-dialog";

describe("CreateANewCommunityDialog", () => {
  let component: CreateANewCommunityDialog;
  let fixture: ComponentFixture<CreateANewCommunityDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateANewCommunityDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateANewCommunityDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
