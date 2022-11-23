import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePlusComponent } from './manage-plus.component';

describe('ManagePlusComponent', () => {
  let component: ManagePlusComponent;
  let fixture: ComponentFixture<ManagePlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePlusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagePlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
