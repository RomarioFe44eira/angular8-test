import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LoginComponent, User } from "./login.component";


describe('Component: Login', () => {

    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(() => {

        // Refina o módulo de teste declarando o componente de teste
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule],
            declarations: [LoginComponent]
        });

        // Cria um componente e o atribui a fixture
        fixture = TestBed.createComponent(LoginComponent);

        // Obtem a instancia de teste de fixture
        component = fixture.componentInstance;
        component.ngOnInit();
    });

    it('formulário inválido quando vazio', () => {
        expect(component.form.valid).toBeFalsy();
    });

    it('validade do campo email', () => {
        let errors = {};
        let email = component.form.controls['email'];
        expect(email.valid).toBeFalsy();

        // Email é um campo obrigatório
        errors = email.errors || {};
        expect(errors['required']).toBeTruthy();

        // Definir um email
        email.setValue("test");
        errors = email.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['pattern']).toBeTruthy();

        // Defina o email e verifica se é required e se possui uma expressão regular
        email.setValue("test@example.com");
        errors = email.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['pattern']).toBeFalsy();
    });

    it('validade do campo de senha', () => {
        let errors = {};
        let password = component.form.controls['password'];

        // O campo Email é obrigatório
        errors = password.errors || {};
        expect(errors['required']).toBeTruthy();

        // Definir algum email e checar se é required e 
        // se possui o minlength
        password.setValue("123456");
        errors = password.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['minlength']).toBeTruthy();

        // Defina o email como algo correto
        password.setValue("123456789");
        errors = password.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['minlength']).toBeFalsy();
    });

    it('enviar um formulário emite um usuário', () => {
        expect(component.form.valid).toBeFalsy();
        component.form.controls['email'].setValue("test@test.com");
        component.form.controls['password'].setValue("123456789");
        expect(component.form.valid).toBeTruthy();

        let user: User;
        // Assine o Observable e armazene o usuário em uma variável local.
        component.loggedIn.subscribe((value) => user = value);

        // Disparar a função de login
        component.login();

        // Agora podemos verificar se o valor emitido está correto
        expect(user.email).toBe("test@test.com");
        expect(user.password).toBe("123456789");
    });
});