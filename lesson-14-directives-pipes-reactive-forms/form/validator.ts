import { AbstractControl } from '@angular/forms';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';

export class Validator {

  static checkProjectName(control: AbstractControl) {
    if (control.value === 'test' ) {
      return { projectName: true};
    }
    return null;
  }

  static checkAsyncProjectName(control: AbstractControl) {
    return of('test').pipe(
      map((item) => control.value === item ? {checkName: true}  : null),
      delay(2000)
    );
  }
}