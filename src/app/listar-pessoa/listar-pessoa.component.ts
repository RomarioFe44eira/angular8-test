import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PersonService } from '../person.service';
import { MatTableDataSource } from '@angular/material';


export interface iPerson {
  id: string;
  nome: string;
  sexo: string;
  acao: string;
}


@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListarPessoaComponent implements OnInit {

  public dataSource;
  displayedColumns: string[] = ['id', 'nome', 'sexo', 'acao'];

  constructor(
    private personService: PersonService
  ){
    console.log(this.personService.getPerson());
    this.dataSource = new MatTableDataSource(this.personService.getAllPerson());
  }

  ngOnInit() {
  }

  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
}
