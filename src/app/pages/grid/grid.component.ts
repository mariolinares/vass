import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseComponent } from 'src/app/core/components/base.component';
import { Product } from 'src/app/core/models/product.interface';
import { ModulosService } from 'src/app/core/services/modulos.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent extends BaseComponent implements OnInit {
  todo = [
    "itemMario"
  ]
  estanterias = [];
  connectedTo = [];
  modulos: number[]
  numero: number = 0;

  
  constructor(public moduloService: ModulosService) {
    super(moduloService);

    this.modulos = [1,2,3]
    this.estanterias = this.moduloService.getModulo(0);
    this.connectDrag()
  }

  products$: Observable<Product[]>;

  ngOnInit(): void {
    this.products$ = of([
      { code: 63634, name: 'PIZZA MEDITERRÁNEA', description: '430 GR HACENDADO', image: 'https://a1.soysuper.com/a396b9beeb0e9474bc3bf235cd2fcaa4.1500.0.0.0.wmark.6c88e14c.jpg' },
      { code: 63514, name: 'PIZZA JAMÓN Y QUESO S/LACT. Y S/GLU.', description: '420 GR HACENDADO', image: 'https://a1.soysuper.com/078c326a24e3b6dd2ed3cbfb92b06e4c.1500.0.0.0.wmark.118a8a51.jpg' },
      { code: 63582, name: 'PIZZA ATUN BACON', description: '415 GR HACENDADO', image: 'https://a0.soysuper.com/2fc68d5819be2f661e4305b089dfe227.1500.0.0.0.wmark.38a21b2d.jpg' },
    ])
  }




}
