import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeCardComponent } from './personaje-card.component';

describe('PersonajeCardComponent', () => {
  let component: PersonajeCardComponent;
  let fixture: ComponentFixture<PersonajeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonajeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
