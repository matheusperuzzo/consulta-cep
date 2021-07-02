import { Endereco } from '../models/endereco';
import { NovaConsultaService } from './../services/nova-consulta.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-consulta',
  templateUrl: './nova-consulta.component.html',
  styleUrls: ['./nova-consulta.component.css']
})
export class NovaConsultaComponent implements OnInit {
  @Output() aoPesquisar = new EventEmitter<any>();

  cep!: string;
  endereco!: Endereco;
  enderecos: any[] = [];

  constructor(private consultaService: NovaConsultaService) { }

  ngOnInit(): void {
    this.limparCampo();
  }

  pesquisar(){
    const cep = this.cep;
    this.endereco = new Endereco();
    this.consultaService.pesquisar(cep).subscribe(endereco => {
      let payload: any = endereco;
      this.endereco = payload;
      this.endereco.data = new Date();
      this.limparCampo();
      this.enderecos.push(payload)
    });
    this.aoPesquisar.emit(this.enderecos);
  }

  limparCampo(){
    this.cep = "";
  }
}
