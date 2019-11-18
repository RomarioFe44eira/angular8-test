import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  public person: any[];

  constructor() {
    this.person = [
      {id: "1234567891011", nome: "Armando",   sexo: "Masculino", acao: 'H'},
      {id: "1234567891012", nome: "Paulo",   sexo: "Masculino", acao: 'He'},
      {id: "1234567891013", nome: "Ana",  sexo: "Femenino", acao: 'Li'},
      {id: "1234567891014", nome: "Anabel",  sexo: "Femenino", acao: 'Be'},
      {id: "1234567891015", nome: "Anabelle",  sexo: "Femenino", acao: 'B'},
      {id: "1234567891016", nome: "Ananda",   sexo: "Femenino", acao: 'C'},
      {id: "1234567891017", nome: "Anastácia",   sexo: "Femenino", acao: 'N'},
      {id: "1234567891018", nome: "Roger",   sexo: "Masculino", acao: 'O'},
      {id: "1234567891019", nome: "Andressa",   sexo: "Femenino", acao: 'F'},
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
