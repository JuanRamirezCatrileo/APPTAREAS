import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  listaTareas: Tarea[] = []
  nombreTarea = '';

  constructor() {}

  ngOnInit(): void{

  }

  agregarTarea(){
    //crear una tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }
    //agregar el objeto tarea al array
    this.listaTareas.push(tarea);

    //reset formulario
    this.nombreTarea = '';
  }
  //eliminar tarea 1 c 1
  eliminarTarea(index:number): void{
    this.listaTareas.splice(index, 1);

  }
  actualizarTarea(index: number, tarea: Tarea): void{
    this.listaTareas[index].estado = !tarea.estado
  }
}
