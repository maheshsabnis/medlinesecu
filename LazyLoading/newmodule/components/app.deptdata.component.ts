import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dept-component',
    template: `
      <table>
        <thead>
        <tr>
            <td>DeptNo</td>
            <td>DeptName</td>
        </tr>
        </thead>
        <tbody>
           <tr *ngFor="let d of depts">
              <td>{{d.DeptNo}}</td>
              <td>{{d.DeptName}}</td>
           </tr>
        </tbody>
      </table>
      <hr>
      <a [routerLink]="['emp']">Emp</a>
    `
})
export class DeptComponent implements OnInit {
    depts: any;
    constructor() {
        this.depts = [
            { DeptNo: 1, DeptName: 'D1' },
            { DeptNo: 2, DeptName: 'D2' },
        ];
    }

    ngOnInit(): void { }
}
