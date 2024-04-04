import { Injectable } from '@angular/core';

import { Mascota } from '../models/mascota.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private mascotas = new BehaviorSubject<Mascota[]>([]);
  currentMascotas = this.mascotas.asObservable();
  constructor() { }

  addMascota(mascota: any) {
    let array = this.mascotas.getValue();
    array.push({...mascota});
    this.mascotas.next(array);
  }

  getMascotas() {
    return this.mascotas;
  }

}
