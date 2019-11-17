import { TestBed } from '@angular/core/testing';

import { PersonService } from './person.service';

describe('PersonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('Deve criar uma instância de PersonService', () => {
    const service: PersonService = TestBed.get(PersonService);
    expect(service).toBeTruthy();
  });
  

  xit('Deve retornar todos person cadastrados', ()=> {

    const service: PersonService = TestBed.get(PersonService);
    expect(service.getPerson['id']).toEqual(1);

  })

});
