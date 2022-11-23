import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeAppearanceComponent } from './theme-appearance.component';

describe('ThemeAppearanceComponent', () => {
  let component: ThemeAppearanceComponent;
  let fixture: ComponentFixture<ThemeAppearanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeAppearanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeAppearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
