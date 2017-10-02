import { Directive } from '@angular/core';
import { FormGroup, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[validateLocation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true }]
})
export class LocationValidator implements Validator {
  validate (f: FormGroup): { [key: string]: any } {
    const addressControl = f.controls['address'];
    const cityControl = f.controls['city'];
    const countryControl = f.controls['country'];
    const onlineUrlControl = (<FormGroup>f.root).controls['onlineUrl'];

    if ((addressControl && addressControl.value && cityControl && cityControl.value &&
      countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
      return null;
    } else {
      return { validateLocation: false };
    }
  }

}