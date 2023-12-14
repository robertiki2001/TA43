import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from '../../../modelos/personaje.model';
import { PersonajesService } from '../../../servicios/personajes.service';

@Component({
  selector: 'app-personajes-detail',
  standalone: true,
  imports: [],
  templateUrl: './personajes-detail.component.html',
  styleUrl: './personajes-detail.component.css'
})
export class PersonajesDetailComponent implements OnInit {

  id: any;
  personaje: Personaje = {
    name: '',
    gender: '',
    species: '',
    location: {name: ''},
    image: ''
  };

  constructor(private personajesService: PersonajesService, private _route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this._route.snapshot.paramMap.get('id');

    this.personajesService.get(this.id).subscribe(result => {
      this.personaje = result;
    },
    error => {
      console.log("Problemas");
    });
  }

}