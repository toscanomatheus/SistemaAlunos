import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroAlunoComponent } from './pages/aluno/cadastro-aluno/cadastro-aluno.component';
import { ListagemAlunoComponent } from './pages/aluno/listagem-aluno/listagem-aluno.component';


const routes: Routes = [
  {
    path: 'aluno',
    children: [
      {
        path: 'novo',
        component: CadastroAlunoComponent
      },
      {
        path: 'editar/:id',
        component: CadastroAlunoComponent
      },
      {
        path: '',
        component: ListagemAlunoComponent,
      },
    ]
  },
  {
    path: '',
    component: ListagemAlunoComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }