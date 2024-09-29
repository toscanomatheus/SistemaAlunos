import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ListagemAlunoComponent } from './listagem-aluno/listagem-aluno.component';


@NgModule({
  declarations: [
    CadastroAlunoComponent,
    ListagemAlunoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [provideNgxMask()],
  exports: [
    CadastroAlunoComponent,
    ListagemAlunoComponent

  ]
})
export class AlunoModule { }
