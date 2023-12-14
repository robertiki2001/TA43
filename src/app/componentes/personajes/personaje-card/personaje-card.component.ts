import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-personaje-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './personaje-card.component.html',
  styleUrl: './personaje-card.component.css'
})

export class PersonajeCardComponent implements OnInit {

  @Input() personaje: any;

  constructor() { }

  ngOnInit(): void {
  }

}