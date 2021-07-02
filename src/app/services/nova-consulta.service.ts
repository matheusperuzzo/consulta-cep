
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovaConsultaService {

  readonly url: string = "https://viacep.com.br/ws/"

  constructor(private http: HttpClient) { }

  pesquisar(cep: string){
    return this.http.get(`${this.url}${cep}/json`);
  }
}
