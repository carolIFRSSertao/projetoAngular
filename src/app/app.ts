import { Component } from '@angular/core';
import { Pages } from './components/shared/pages/pages';


@Component({
  imports: [Pages],
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
