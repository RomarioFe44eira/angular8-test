import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Material } from './material';
import { MaskIdPipe } from './mask-id.pipe';
import { AuthModule } from './auth/auth.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    MaskIdPipe,
    PageNotFoundComponent,
    ListarPessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Material,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PageNotFoundComponent, ListarPessoaComponent]
})
export class AppModule { }
