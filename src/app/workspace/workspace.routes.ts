import {WorkspaceComponent} from './workspace.component';
import {PageNotFoundComponent} from '../not-found.component';

export const workspaceRoutes = [
  {
    path: '',
    component: WorkspaceComponent,
    children: [
      {
        path: '', redirectTo: 'user', pathMatch: 'full'
      },
      {
        path: 'user',
        loadChildren: '../userModule/user.module#userModule',
        title: '用户管理'
      },
      // {
      //   path: 'trade',
      //   loadChildren: '../tradeModule/trade.module#tradeDemoModule',
      //   title: '采购管理'
      //  },
      {
        path: '**',
        component: PageNotFoundComponent
      },
    ]
  }
];
