import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  public person: any[];

  constructor() {
    this.person = [
      {id: "1", nome: "Armando",   sexo: "Masculino", acao: 'H'},
      {id: "2", nome: "Paulo",   sexo: "Masculino", acao: 'He'},
      {id: "3", nome: "Ana",  sexo: "Femenino", acao: 'Li'},
      {id: "4", nome: "Anabel",  sexo: "Femenino", acao: 'Be'},
      {id: "5", nome: "Anabelle",  sexo: "Femenino", acao: 'B'},
      {id: "6", nome: "Ananda",   sexo: "Femenino", acao: 'C'},
      {id: "7", nome: "Anastácia",   sexo: "Femenino", acao: 'N'},
      {id: "8", nome: "Roger",   sexo: "Masculino", acao: 'O'},
      {id: "9", nome: "Andressa",   sexo: "Femenino", acao: 'F'},
    ];
  }

  

  getPerson(){
    return this.person;
  }

  getAllPerson(){
    return this.person;
  }

  insertPerson(p: any){
    this.person.push(p);
  }

  deletePerson(p: any){
    this.person.forEach(personTemp => {
      if (personTemp.id == p.id) {
        delete this.person['id'];
      }
    });
  }



}
