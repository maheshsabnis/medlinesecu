import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-emp-component',
    template: `
      <table>
        <thead>
        <tr>
            <td>EmpNo</td>
            <td>EmpName</td>
        </tr>
        </thead>
        <tbody>
           <tr *ngFor="let e of emps">
              <td>{{e.EmpNo}}</td>
              <td>{{e.EmpName}}</td>
           </tr>
        </tbody>
      </table>
    `
})
export class EmpComponent implements OnInit {
    emps: any;
    constructor() {
        this.emps = [
            { EmpNo: 1, EmpName: 'A' },
            { EmpNo: 2, EmpName: 'B' }
        ];
    }

    ngOnInit(): void { }
}
