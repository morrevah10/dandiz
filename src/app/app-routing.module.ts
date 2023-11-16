import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LandComponent } from './pages/land/land.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {path:'',component:LandComponent},
  { path: 'home', component: HomeComponent },
  { path: 'home/:category', component: HomeComponent },
  {path:'cart',component:CartComponent},
  { path: 'product/:id', component: ProductComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
