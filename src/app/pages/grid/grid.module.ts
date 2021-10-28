import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';
import { DemoComponent } from '../../core/components/demo/demo.component';
import { BuscadorComponent } from '../../core/components/buscador/buscador.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    GridComponent,
    DemoComponent,
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    GridRoutingModule,
    MaterialModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class GridModule { }
