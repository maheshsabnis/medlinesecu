import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeptComponent } from './components/app.deptdata.component';
import { EmpComponent } from './components/app.empdata.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
const childRoutes: Routes = [
    { path: '', component: DeptComponent },
    { path: 'emp', component: EmpComponent }
];

@NgModule({
    declarations: [DeptComponent, EmpComponent],
    imports: [FormsModule, CommonModule,
        RouterModule.forChild(childRoutes)
    ],
    exports: [DeptComponent, EmpComponent]
})
export class FeatureModule { }


