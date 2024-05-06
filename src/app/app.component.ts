import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NvBarComponent } from './components/nv-bar/nv-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NvBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'semana2dia1';
}
