import { AbstractControl } from '@angular/forms';

export class NonNegativeValidator {
    static checkForPositive(ctrl: AbstractControl): any {
        let val: number = parseInt(ctrl.value);
        if (val > 0) {
            return null;
        }
        return { invalid: true };
    }
}
