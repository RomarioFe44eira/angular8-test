import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPessoaComponent } from './listar-pessoa.component';

describe('ListarPessoaComponent', () => {
  let component: ListarPessoaComponent;
  let fixture: ComponentFixture<ListarPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('Deve instânciar listarPessoas', () => {
    expect(component).toBeTruthy();
  });
});
