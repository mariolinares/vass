import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  
  searchForm: FormGroup;
  connectedTo = [];
  filterTerm: string;

  @Input() products: Product[];
  
  constructor() { }

  ngOnInit(): void {
    
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
  }

  onSubmit(){
    this.filterResults(this.searchForm?.value?.name)
  }

  filterResults(termino){
    let allResults = this.products;
    
    this.products = allResults.filter(option => this.filtrar_acentos(option.name.toLowerCase()).includes(termino));;    
    console.log('this.products: ', this.products);

    if(this.products.length === 0){
      this.products = allResults
    }
  }


  filtrar_acentos(input){
    var acentos = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç";
    var original = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc";
    for (var i = 0; i < acentos.length; i++) {
        input = input.replace(acentos.charAt(i), original.charAt(i)).toLowerCase();
    };
    
    return input;
}

}
