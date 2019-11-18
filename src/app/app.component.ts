import { Component } from '@angular/core';
import { PersonService } from './person.service';
import { MatTableDataSource } from '@angular/material';

export interface iPerson {
  id: string;
  nome: string;
  sexo: string;
  acao: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Teste de Software';
  public dataSource;
  displayedColumns: string[] = ['id', 'nome', 'sexo', 'acao'];

  constructor(
    private personService: PersonService
  ){
    console.log(this.personService.getPerson());
    this.dataSource = new MatTableDataSource(this.personService.getAllPerson());
  }

  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

 

}
