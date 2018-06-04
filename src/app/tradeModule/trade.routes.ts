import { listComponent } from './list/list.component';
// import {Details} from './details';
//  import {DataTableAdd} from './add';

export const tradeRoutes=[
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: listComponent
    }
]