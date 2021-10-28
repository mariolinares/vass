import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModulosService {
  modulos;

  constructor() {
    this.modulos = [
      [ 
        {
          id: 'estanteria-1 Modulo1',
          logistica: 1,
          agujeros: 5,
          productlist: 
          [
            { code: 63556, name: 'PIZZA PEPPERONI', description: '410 GR HACENDADO', image: 'https://d2ohdpvxj0yo9f.cloudfront.net/products/pi/pizza-fresca-con-pepperonni-mas-picante-de-mercadona-1588726599_m.jpg' },
            { code: 63631, name: 'PIZZA RÚSTICA POLLO', description: '420 GR HACENDADO', image: 'https://a0.soysuper.com/943cd5627089a0e57b29f2cc7e0e2b93.1500.0.0.0.wmark.978c3f0e.jpg' },
          ]
        },
        {
          id: 'estanteria-2 Modulo1',
          logistica: 1,
          agujeros: 8,
          productlist: [
            { code: 63581, name: 'PIZZA JAMÓN Y QUESO', description: '415 GR HACENDADO', image: 'https://d2ohdpvxj0yo9f.cloudfront.net/products/pi/pizza-de-jamon-york-queso-con-perlas-de-mozarella-de-mercadona-1603157700_m.jpg' },
            { code: 63580, name: 'PIZZA 4 QUESOS', description: '410 GR HACENDADO', image: 'https://a1.soysuper.com/868b994e8397f4dfefcb3946822fbf00.1500.0.0.0.wmark.ad7025e6.jpg' },
          ],
        },
        {
          id: 'estanteria-3 Modulo1',
          logistica: 1,
          agujeros: 10,
          productlist: [
            { code: 63613, name: 'PIZZA BARBACOA CON BACON', description: '415 GR HACENDADO', image: 'https://cdn.deliberry.com/images/449921/resize/600/600/3.jpg' },
            { code: 63627, name: 'PIZZA JAMÓN QUESO', description: '600 GR HACENDADO', image: 'https://a1.soysuper.com/fa566c5eecb2dd8dd83ab22089a291b3.1500.0.0.0.wmark.32aa152e.jpg' },
          ],

          
        },
        {
          id: 'estanteria-4 Modulo1',
          logistica: 1,
          agujeros: 8,
          productlist: [
            { code: 63632, name: 'PIZZA CARBONARA', description: '600 GR HACENDADO', image: 'https://a0.soysuper.com/eb3f7d4339dbd6e5f6ebe6a8904d9491.1500.0.0.0.wmark.a51132e0.jpg' },
            { code: 63628, name: 'PIZZA 4 QUESOS FAMILIAR', description: '580 GR HACENDADO', image: 'https://a0.soysuper.com/eb3f7d4339dbd6e5f6ebe6a8904d9491.1500.0.0.0.wmark.a51132e0.jpg' },
            { code: 63629, name: 'PIZZA BARBACOA', description: '600 GR HACENDADO', image: 'https://a0.soysuper.com/fdd27c669587f6c29e88b0c4b0d2485b.1500.0.0.0.wmark.5ef5d542.jpg' },
          ],
        },
      ],
      [
        {
          id: 'estanteria-1 Modulo2',
          agujeros: 5,
          productlist: ['item 1', 'item 2'],
        },
        {
          id: 'estanteria-2 Modulo2',
          agujeros: 10,
          productlist: ['item 5'],
        },
      ],
    ];
  }

  getModulo(numero: number) {
    return this.modulos[numero];
  }
}
