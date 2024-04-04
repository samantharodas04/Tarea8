import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { TableComponent } from './tabla/tabla.component';
export const routes: Routes = [
  {path: '',component: FormularioComponent},
  {path: 'formulario' , component: FormularioComponent},
  {path: 'tabla' , component: TableComponent},
];
