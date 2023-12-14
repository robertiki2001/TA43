import { Component, OnInit  } from '@angular/core';
import { Personaje } from '../../../modelos/personaje.model';
import { PersonajesService } from '../../../servicios/personajes.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
const { faker } = require('@faker-js/faker');

@Component({
  selector: 'app-add-personaje',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css'
})

export class AddPersonajeComponent implements OnInit {

  personaje: Personaje = {
    name: '',
    gender: '',
    species: '',
    location: '',
    image: ''
  };
  submitted = false;

  constructor(private personajeService: PersonajesService) { }

  ngOnInit(): void {
  }

  savePersonaje(): void
  {
    const data = {
      name: this.personaje.name,
      gender: this.personaje.gender,
      species: this.personaje.species,
      location: this.personaje.location,
      image: faker.image.image()
    };

    this.personajeService.create(data).subscribe({
      next: (response) => {
        console.log(response);
        this.submitted = true;
      },
      error: (error) => {
        console.log(error);
      }
    });
    
  }

  newPersonaje(): void
  {
    this.submitted = false;
    this.personaje = {
      name: '',
      gender: '',
      species: '',
      location: '',
      image: ''
    }
  }
}