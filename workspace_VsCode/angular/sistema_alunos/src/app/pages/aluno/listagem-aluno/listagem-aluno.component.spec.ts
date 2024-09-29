import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemAlunoComponent } from './listagem-aluno.component';

describe('ListagemAlunoComponent', () => {
  let component: ListagemAlunoComponent;
  let fixture: ComponentFixture<ListagemAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemAlunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagemAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
