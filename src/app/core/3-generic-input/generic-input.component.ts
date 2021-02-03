import {AfterViewInit, Component, ElementRef, Input, OnInit, Self, ViewChild,} from '@angular/core';
import {AbstractControl, ControlValueAccessor, NgControl, Validator, ValidatorFn, Validators,} from '@angular/forms';

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.scss'],
  // providers: [{
  //   provide: NG_VALUE_ACCESSOR,
  //   multi: true,
  //   useExisting: GenericInputComponent
  // },
  // {
  //   provide: NG_VALIDATORS,
  //   multi: true,
  //   useExisting: GenericInputComponent
  // }]
})
export class GenericInputComponent implements ControlValueAccessor, Validator, OnInit, AfterViewInit {
  @ViewChild('input') input: ElementRef;
  disabled;
  defaultValue;

  @Input() type = 'text';
  @Input() isRequired = false;
  @Input() pattern: string = null;
  @Input() label: string = null;
  @Input() placeholder: string;
  @Input() errorMsg: string;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit() {
    const control = this.controlDir.control;
    const validators: ValidatorFn[] = control.validator ? [control.validator] : [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }

    control.setValidators(validators);
    control.updateValueAndValidity();
  }

  ngAfterViewInit(): void {
    this.writeValue(this.defaultValue);
  }

  onChange(event) {
  }

  onTouched() {
  }

  writeValue(obj: any): void {
    if (this.input && this.input.nativeElement) {
      this.input.nativeElement.value = obj;
    } else {
      this.defaultValue = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(c: AbstractControl): { [key: string]: any; } {
    const validators: ValidatorFn[] = [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }

    return validators;
  }


}
