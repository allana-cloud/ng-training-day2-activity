import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwoColumnComponent } from './two-column/two-column.component';
import { OneColumnComponent } from './one-column/one-column.component';
import { ThreeColumnComponent } from './three-column/three-column.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { HomeComponent } from './content/home/home.component';
import { AboutComponent } from './content/about/about.component';
import { ContactComponent } from './content/contact/contact.component';
import { ShopComponent } from './content/shop/shop.component';
import { ProductListComponent } from './content/shop/product-list/product-list.component';
import { ProductViewComponent } from './content/shop/product-view/product-view.component';

const routes: Routes = [
  { path: '', component: TwoColumnComponent, children: [
      { path: '', component: HomeComponent },            
      { path: 'shop', component: ShopComponent, children: [
        { path: '', component: ProductListComponent },
        { path: 'product/:id/view', component: ProductViewComponent },
        { path: '**', redirectTo: '' }
      ] 
    },
    ]
  },
  { path: '', component: OneColumnComponent, children: [
      { path: 'about-us', component: AboutComponent }     
    ]
  }, 
  { path: '', component: ThreeColumnComponent, children: [
    { path: 'contact-us', component: ContactComponent }    
  ]
}, 
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
