import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type InputTypes  = "text"| "email"| "password"

@Component({
  selector: 'app-primary-input',
  templateUrl: './primary-input.component.html',
  styleUrls: ['./primary-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrimaryInputComponent),
      multi: true,
    }
  ]
})
export class PrimaryInputComponent implements ControlValueAccessor {

  @Input() label: string = "";
  @Input() inputName: string = "";
  @Input() type: InputTypes = "text";
  @Input() placeHolder: string = "";

  value: string = ''
  onChange: any = () => {}
  onTouched: any = () => {}

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void{

  }


  // writeValue(value: any): void {}
  // registerOnChange(fn: any): void {}
  // registerOnTouched(fn: any): void {}
  // setDisabledState?(isDisabled: boolean): void {}

}