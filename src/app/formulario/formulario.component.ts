import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { Mascota } from '../models/mascota.model';
import { MascotaService } from '../services/mascota.service';
import { ToolbarComponent } from '../toolbar/toolbar.component';
@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [MatButton,ToolbarComponent,MatButton, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatDialogModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  constructor(public dialog: MatDialog) {}

  nombre: string = '';
  type: number = 1;

  openDialog(): void {
    this.dialog.open(Dialog, {
      data: { nombre: this.nombre, type: this.type }
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  standalone: true,
  imports: [MatDialogModule,MatButton],
  templateUrl: './dialog-overview-example-dialog.html',

})
export class Dialog {
  private MascotaService = inject(MascotaService);

  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: Mascota
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addMascota() {
    this.MascotaService.addMascota({ nombre: this.data.nombre,type:this.data.type });
    this.onNoClick();

    var inputNombre = document.getElementById('inputNombre') as HTMLInputElement;
    inputNombre.value = '';
  }

}
