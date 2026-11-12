import { Component, signal } from '@angular/core';
import { Title } from '../../shared/title/title';

@Component({
  imports: [Title],
  standalone: true,
  selector: 'app-contador',
  styleUrl: './contador.css',
  templateUrl: './contador.html',
})
export class Contador {
  count = signal(0);

  increment(){
    this.count.update((n) => n + 1);
  }

  decrement(){
    this.count.update((n) => n - 1);
  }

  reset(){
    this.count.set(0);
  }
}
