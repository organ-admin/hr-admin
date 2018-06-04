import { listComponent } from './list/list.component';
import { addComponent } from './add/add.component';
// import {Details} from './details';
// import {DataTableAdd} from './add';

export const userRoutes=[
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: listComponent
    },
    {
        path:"add",
        component: addComponent
    }
]