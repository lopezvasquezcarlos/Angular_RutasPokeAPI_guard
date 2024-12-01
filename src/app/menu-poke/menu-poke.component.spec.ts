import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPokeComponent } from './menu-poke.component';

describe('MenuPokeComponent', () => {
  let component: MenuPokeComponent;
  let fixture: ComponentFixture<MenuPokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuPokeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
