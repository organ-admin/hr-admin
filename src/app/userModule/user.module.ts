import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MyBreadcrumbModule} from "../components/my-breadcrumb/my-breadcrumb";
import { userRoutes } from "./user.routes";
import { ElModule } from 'element-angular'
import { listComponent } from './list/list.component';
// import {Details} from './details';
// import {DataTableAdd} from './add';



@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(userRoutes),
    ElModule
  ],
  declarations: [
    listComponent,
    // Details,
    // DataTableAdd
  ],
  exports:[RouterModule]
})
export class userModule { }
