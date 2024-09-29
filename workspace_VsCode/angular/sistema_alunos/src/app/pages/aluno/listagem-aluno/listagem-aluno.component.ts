import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Aluno } from 'src/app/shared/models/Aluno';
import { AlunoService } from 'src/app/shared/services/aluno.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listagem-aluno',
  templateUrl: './listagem-aluno.component.html',
  styleUrls: ['./listagem-aluno.component.scss']
})
export class ListagemAlunoComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'funcoes'];
  dataSource = new MatTableDataSource<Aluno>;


  constructor(private alunoService: AlunoService){
  }


  ngAfterViewInit() {
    this.listarAlunos()
  }


  listarAlunos() {
    this.alunoService.listar().subscribe(alunos => {
      this.dataSource.data = alunos;
    });
  }


  deletarAluno(id: number){
    Swal.fire({
      title: 'Você tem certeza que deseja deletar?',
      text: "Não tem como reverter essa ação",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: 'grey',
      confirmButtonText: 'Deletar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.alunoService.deletar(id).subscribe({
          next: () => {
            Swal.fire({
              icon: 'success',
              title: 'Sucesso',
              text: 'Aluno deletado com sucesso!',
              showConfirmButton: false,
              timer: 1500
            })
            this.listarAlunos()
          },
          error: (error) => {
            console.error(error)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Erro ao deletar aluno!',
            })
          }})
      }})}
}
