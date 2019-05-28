import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Product } from 'src/app/models/app.product.model';
import { ProductLogic } from 'src/app/models/app.product.logic';
import { Categories, Manufacturers } from 'src/app/models/app.constants';
import { NonNegativeValidator } from './app.custom.validator';


@Component({
    selector: 'app-productform-component',
    templateUrl: 'app.productform.view.html'
})
export class ProductFormComponent implements OnInit {
    product: Product;
    products: Array<Product>;
    private logic: ProductLogic;
    categories = Categories;
    manufacturers = Manufacturers;
    tableHeaders: Array<string>;
    isFormSubmitted: boolean;
    // define the FormGroup Reference
    frmPrd: FormGroup;

    constructor() {
        this.product = new Product(0, '', '', 0, '', '', '');
        this.products = new Array<Product>();
        this.logic = new ProductLogic();
        this.tableHeaders = new Array<string>();
        this.isFormSubmitted = false;
        // define the FormGroup Instance with collection of FormContol in it
        // each FormControl will link with the Model's public property
        // e.g. Product class properties

        // FormGroup({Key:Value})
        // Key is the identifier that will act as 'formControlName' attribute
        // for form editable Elements
        // Value is the Property from the Model class, that will be Read 
        // and wrritten based on formControlName from UI  

        this.frmPrd = new FormGroup({
            ProductRowId: new FormControl(this.product.ProductRowId,
                Validators.compose([Validators.required,
                Validators.minLength(2),
                Validators.maxLength(6),
                Validators.pattern('[0-9]*')])),
            ProductId: new FormControl(this.product.ProductId),
            ProductName: new FormControl(this.product.ProductName),
            Price: new FormControl(this.product.Price,
                Validators.compose([NonNegativeValidator.checkForPositive])),
            CategoryName: new FormControl(this.product.CategoryName),
            Manufacturer: new FormControl(this.product.Manufacturer),
            Description: new FormControl(this.product.Description)
        });

    }

    // method that will be invoked immediately after the ctor
    ngOnInit(): void {
        // put properties of Product class in tableHeaders array
        for (let p in this.product) {
            this.tableHeaders.push(p);
        }
        this.products = this.logic.getProducts();

    }

    clear(): void {
        this.product = new Product(0, '', '', 0, '', '', '');
    }
    save(): void {
        this.product = this.frmPrd.value;
        this.products = this.logic.createProduct(this.product);
        this.isFormSubmitted = false;
    }

    getSelectedProduct(prd: Product): void {
        this.product = Object.assign({}, prd);
    }

    loadForm(): void {
        this.product = new Product(0, '', '', 0, '', '', '');
        this.isFormSubmitted = true;
    }
}
