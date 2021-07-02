import { Component, Input, OnInit } from '@angular/core';
import { Endereco } from '../models/endereco';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  @Input() enderecos!: Array<Endereco>;

  constructor() { }

  ngOnInit(): void {
  }
}
