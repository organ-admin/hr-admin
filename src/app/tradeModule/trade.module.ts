import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import { tradeRoutes } from "./trade.routes";
import { ElModule } from 'element-angular'
import { listComponent } from './list/list.component';
import { addComponent } from './add/add.component';
// import {Details} from './details';
// import {DataTableAdd} from './add';



@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(tradeRoutes),
    ElModule
  ],
  declarations: [
    listComponent,
    addComponent,
    // Details,
    // DataTableAdd
  ],
  exports:[RouterModule]
})
export class tradeModule { }
