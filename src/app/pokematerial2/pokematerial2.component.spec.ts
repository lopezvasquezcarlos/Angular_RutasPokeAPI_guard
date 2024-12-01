import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokematerial2Component } from './pokematerial2.component';

describe('Pokematerial2Component', () => {
  let component: Pokematerial2Component;
  let fixture: ComponentFixture<Pokematerial2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pokematerial2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pokematerial2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
