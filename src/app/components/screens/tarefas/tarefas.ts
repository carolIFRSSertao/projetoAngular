import { Component } from '@angular/core';
import { Title } from '../../shared/title/title';

@Component({
  imports: [Title],
  standalone: true,
  selector: 'app-tarefas',
  styleUrl: './tarefas.css',
  templateUrl: './tarefas.html',
})
export class Tarefas {
}
