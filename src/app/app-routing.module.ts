import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';


const routes: Routes = [
  {path: '', loadChildren: './auth/auth.module#AuthModule'}, 
  {path: 'listarPessoas', component: ListarPessoaComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
