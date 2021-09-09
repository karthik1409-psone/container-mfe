import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes = [
    {
        path: '', 
        component: HomeComponent       
    },
    {
        path: 'productlistmfe',
        loadChildren: () => import('productlistmfe/ProductListMFE').then(m => m.ProductListModule)
    },
    {
        path: 'cartmfe',
        loadChildren: () => import('cartmfe/CartMFE').then(m => m.CartModule)
    },
    {
        path: 'paymentmfe',
        loadChildren: () => import('paymentmfe/PaymentModule').then(m => m.PaymentModule)
    }
];

export default RouterModule.forRoot(routes);