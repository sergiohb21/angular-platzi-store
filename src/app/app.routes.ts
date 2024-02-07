import { Routes,RouterModule } from '@angular/router';
import { TableComponent } from './components/product-table/product-table.component';
import { IndexComponent } from './components/index/index.component';

export const routes: Routes = [
    { path: '', component:IndexComponent  },
    { path: 'tabla', component:TableComponent  },
];
