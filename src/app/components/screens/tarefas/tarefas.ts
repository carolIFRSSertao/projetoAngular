import { Component, inject } from '@angular/core';
import { Title } from '../../shared/title/title';
import { TarefasService } from '../../../services/tarefas.service';

@Component({
  imports: [Title],
  standalone: true,
  selector: 'app-tarefas',
  styleUrl: './tarefas.css',
  templateUrl: './tarefas.html',
})
export class Tarefas {
  readonly tarefas = inject(TarefasService);

  addTarefa(event: Event, input: HTMLInputElement){
    const title = input.value.trim();
    if(!title) return;
    this.tarefas.add(title);
    input.value='';
  }
}
