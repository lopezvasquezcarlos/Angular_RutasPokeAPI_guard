import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokematerialComponent } from './pokematerial.component';

describe('PokematerialComponent', () => {
  let component: PokematerialComponent;
  let fixture: ComponentFixture<PokematerialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokematerialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokematerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
