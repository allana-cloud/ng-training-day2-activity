import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { ShopComponent } from './content/shop/shop.component';
import { OneColumnComponent } from './one-column/one-column.component';
import { TwoColumnComponent } from './two-column/two-column.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductListComponent } from './content/shop/product-list/product-list.component';
import { ProductViewComponent } from './content/shop/product-view/product-view.component';
import { ProductItemComponent } from './content/shop/product-list/product-item/product-item.component';
import { HomeComponent } from './content/home/home.component';
import { ContactComponent } from './content/contact/contact.component';
import { AboutComponent } from './content/about/about.component';
import { ThreeColumnComponent } from './three-column/three-column.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    NotFoundComponent,
    OneColumnComponent,
    TwoColumnComponent,
    ShopComponent,
    SidebarComponent,
    ProductListComponent,
    ProductViewComponent,
    ProductItemComponent,
    HomeComponent,    
    ContactComponent,
    AboutComponent,
    ThreeColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
