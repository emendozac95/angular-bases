import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Hola'];
  heroesBorrados: string = '';


  borrarHeroe(): void {
    this.heroesBorrados =  this.heroes.pop() || '' ;
      
  }

}
