import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cat-component',
    template: `
     <table>
        <thead>
        <tr>
            <td>CatNo</td>
            <td>CatName</td>
        </tr>
        </thead>
        <tbody>
           <tr *ngFor="let c of cats">
              <td>{{c.CatNo}}</td>
              <td>{{c.CatName}}</td>
           </tr>
        </tbody>
      </table>
    `
})
export class CatComponent implements OnInit {
    cats: any;
    constructor() {
        this.cats = [
            { CatNo: 1, CatName: 'C1' },
            { CatNo: 2, CatName: 'C2' },
        ];
    }

    ngOnInit(): void { }
}
