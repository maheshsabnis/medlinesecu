import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatComponent } from './app.cat.component';
import { ProdComponent } from './app.prd.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'cat', component: CatComponent },
  { path: 'prd', component: ProdComponent },
  { path: 'newmodule', loadChildren: './newmodule/app.mymodule#FeatureModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  declarations: [CatComponent, ProdComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
