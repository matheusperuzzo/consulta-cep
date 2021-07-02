import { Component } from '@angular/core';
import { Endereco } from './models/endereco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'consulta-cep';
  enderecos: Array<Endereco> = [];

  pesquisar($event: any){
    this.enderecos = $event;
    console.log(this.enderecos);
  }
}
