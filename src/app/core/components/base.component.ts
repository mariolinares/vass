import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ModulosService } from 'src/app/core/services/modulos.service';
import { Product } from '../models/product.interface';

@Component({
  template: '',
})

export abstract class BaseComponent {
  todo = [
    "itemMario"
  ]
  estanterias = [];
  connectedTo = [];
  modulos: number[]
  numero: number = 0;

  constructor(public moduloService: ModulosService) {
    this.modulos = [1,2,3]
    this.estanterias = this.moduloService.getModulo(0);
    this.connectDrag()
  }

  getModulo(number: number){
    this.estanterias = this.moduloService.getModulo(number);
    this.connectDrag()
  }

  addList() {
    let number = Math.random() * 10;
    this.estanterias.push({
      id: `estanteria-${number}`,
      agujeros: 7,
      productlist: []
    })
    this.connectDrag()
  }

  connectDrag(){
    for (let estanteria of this.estanterias) {
      this.connectedTo.push(estanteria.id);
    };
  }

  drop(event: CdkDragDrop<Product[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    console.log('event: ', event)
    console.log('this.stat', this.estanterias);
    

  }


  

}
