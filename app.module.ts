import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponent } from './components/simplecomponent/app.simple.component';
import { ProductComponent } from './components/productcomponent/app.product.component';
import { ProductFormComponent } from './components/productformcomponent/app.productform.component';
@NgModule({
  declarations: [
    AppComponent, SimpleComponent, ProductComponent, ProductFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProductFormComponent]
})
export class AppModule { }
