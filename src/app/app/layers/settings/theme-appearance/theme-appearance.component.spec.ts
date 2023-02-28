import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeAppearance } from './theme-appearance.component';

describe('ThemeAppearance', () => {
  let component: ThemeAppearance;
  let fixture: ComponentFixture<ThemeAppearance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeAppearance ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeAppearance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
