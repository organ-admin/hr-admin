import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {WorkspaceComponent} from './workspace.component';
import {workspaceRoutes} from './workspace.routes';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PageNotFoundComponent} from '../not-found.component';
import {MyGoTopModule} from '../components/my-gotop/my-gotop';
import { ElModule } from 'element-angular'

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ElModule,
    RouterModule.forChild(workspaceRoutes),
    MyGoTopModule,
  ],
  exports: [],
  declarations: [
    WorkspaceComponent,
    PageNotFoundComponent
  ],
  providers: [

  ],
})
export class WorkspaceModule {
}
