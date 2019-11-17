import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('Auth - Deve ser criado', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('Auth.isLogged - Deverá retornar true', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.isLogged).toBeTruthy(); // Verifica se is Logged retornou true como deveria.
  });

  


});
