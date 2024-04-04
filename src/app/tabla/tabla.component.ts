import { Component, inject } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { Mascota } from '../models/mascota.model';
import { MascotaService } from '../services/mascota.service';
import { TypePipe } from '../pipes/type.pipe';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [ToolbarComponent, MatCardModule, MatTableModule, TypePipe],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.scss'
})
export class TableComponent {
  private mascotaService = inject(MascotaService);
  displayedColumns: string[] = ['index', 'nombre', 'type']; // Agrega 'index' aquí
  Mascotas: Mascota[] = [];

  ngOnInit() {
    this.getMascotas();
  }

  ngOnChanges() {
    this.getMascotas();
  }

  getMascotas() {
    this.mascotaService.getMascotas().subscribe({
      next: (mascotas: Mascota[]) => {
        console.log(mascotas);
        this.Mascotas = [...mascotas];
      },
      error: () => {}
    })
  }
}
