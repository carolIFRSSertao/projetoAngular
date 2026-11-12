import { Component } from '@angular/core';
import { Title } from '../../shared/title/title';

@Component({
  imports: [Title],
  standalone: true,
  selector: 'app-paginaInicial',
  styleUrl: './paginaInicial.css',
  templateUrl: './paginaInicial.html',
})
export class PaginaInicial {
}
