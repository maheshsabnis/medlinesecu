import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-prd-component',
    template: `
     <table>
        <thead>
        <tr>
            <td>ProdNo</td>
            <td>ProdName</td>
        </tr>
        </thead>
        <tbody>
           <tr *ngFor="let c of prds">
              <td>{{c.ProdNo}}</td>
              <td>{{c.ProdName}}</td>
           </tr>
        </tbody>
      </table>
    `
})
export class ProdComponent implements OnInit {
    prds: any;
    constructor() {
        this.prds = [
            { ProdNo: 1, ProdName: 'C1' },
            { ProdNo: 2, ProdName: 'C2' },
        ];
    }

    ngOnInit(): void { }
}
