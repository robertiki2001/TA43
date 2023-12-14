import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../../modelos/personaje.model';
import { PersonajesService } from '../../../servicios/personajes.service';
import { PersonajeCardComponent } from '.././personaje-card/personaje-card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personajes-list',
  standalone: true,
  imports: [FormsModule, CommonModule, PersonajeCardComponent],
  templateUrl: './personajes-list.component.html',
  styleUrl: './personajes-list.component.css'
})

export class PersonajesListComponent implements OnInit {

  personajes?: Personaje[];

  constructor(private personajesService: PersonajesService) {}

  ngOnInit(): void {

    this.personajesService.getAll().subscribe(result => {
      this.personajes = result;
    },
    error => {
      console.log("Problemas");
    });
  }

}