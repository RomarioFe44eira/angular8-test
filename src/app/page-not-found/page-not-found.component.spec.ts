import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [ PageNotFoundComponent ]
    })
    .compileComponents();
  }));

  // SEMPRE É EXECUTADO ANTES DE INICIAR UM NOVO CASO DE TESTE
  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // VERIFICA SE FOI INICIALIZADO CORRETAMENTE
  it('Deverá inicializar a página 404', () => {
    expect(component).toBeTruthy();
  });

  // VERIFICA SE OS ELEMENTOS H2, H4 FORAM RENDERIZADOS COMO DEVERIAM. 
  it('Deve apresentar respectivamente o titulo e subtitulo da pagina 404', () => {
    const fixture = TestBed.createComponent(PageNotFoundComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('h2').textContent).toContain('Página não encontrada');
    expect(compiled.querySelector('h4').textContent).toContain('Não foi possível localizar a página requisitada.');
  })

});
