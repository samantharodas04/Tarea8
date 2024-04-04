import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<router-outlet/>',
  styles: [
    'body { margin: 0; padding: 0; }'
  ]
})
export class AppComponent {
  title = 'Tarea8';
}
