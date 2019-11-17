import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Material } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        Material
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('Deve criar o app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Deve criar um titulo 'Teste de Software' no componente`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Teste de Software');
  });


  // Deve renderizar o titulo na view
  it('Deve renderizar o titulo para que o usuário visualize', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Angular 8 - Teste de Software');
  });


  it('Deve inicializar o titulo e subtitulo do mat-card', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Listagem de pessoas');
    expect(compiled.querySelector('span').textContent).toContain('Apresenta todas as pessoas cadastradas');
  })


});
