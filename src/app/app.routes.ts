import { Routes,RouterModule } from '@angular/router';
import { TableComponent } from './components/product-table/product-table.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
    { path: '', component:ProductDetailComponent  },
    { path: 'tabla', component:TableComponent  },
];
