import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesDetailComponent } from './personajes-detail.component';

describe('PersonajesDetailComponent', () => {
  let component: PersonajesDetailComponent;
  let fixture: ComponentFixture<PersonajesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajesDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonajesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
