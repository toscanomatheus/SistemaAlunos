import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/shared/models/Aluno';
import { AlunoService } from 'src/app/shared/services/aluno.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.scss']
})
export class CadastroAlunoComponent implements OnInit {
  editar;
  formGroup: FormGroup;


  constructor(private alunoService: AlunoService, private router: Router, private route: ActivatedRoute) {
    this.formGroup = new FormGroup({
      id: new FormControl(null),
      name: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      anoNascimento: new FormControl('', Validators.required),
      endereco: new FormGroup({
      cep: new FormControl('', Validators.required),
      }),
    });
    this.editar = false
  }


  ngOnInit(): void {
    if (this.route.snapshot.params["id"]){
      this.editar = true
      this.alunoService.pesquisarPorId(this.route.snapshot.params["id"]).subscribe(
        aluno => {
          this.formGroup.patchValue(aluno)
        }
      )
    }
  }


  salvar() {
    const aluno: Aluno = this.formGroup.value;
    if (this.editar){
      this.editarAluno(aluno)
    } else {
      this.cadastrarAluno(aluno)
    }
  }


  editarAluno(aluno: Aluno) {
    this.alunoService.atualizar(aluno).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: 'Aluno editado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error: (erroBackend) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: erroBackend.error.detalhes,
        })
      }
    })
  }




  cadastrarAluno(aluno: Aluno) {
    this.alunoService.inserir(aluno).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: 'Aluno cadastrado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error: (erroBackend) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: erroBackend.error.detalhes,
        })
      }
    })
  }
}
