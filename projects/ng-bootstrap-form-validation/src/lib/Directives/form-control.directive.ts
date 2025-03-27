import {
  Directive,
  Host,
  HostBinding,
  Inject,
  Input,
  Optional,
  SkipSelf,
} from "@angular/core";
import { ControlContainer, FormControl } from "@angular/forms";
import { BootstrapVersion } from "../enums/BootstrapVersion";
import { BOOTSTRAP_VERSION } from "../tokens/tokens";

export function controlPath(name: string, parent: ControlContainer): string[] {
  // tslint:disable-next-line:no-non-null-assertion
  return [...parent.path, name];
}

@Directive({
  selector:
    ".form-control,.form-check-input,.custom-control-input,.form-select",
  standalone: false,
})
export class FormControlDirective {
  @Input()
  formControlName: string;
  @Input()
  formControl: string;

  constructor(
    // this value might be null, but we union type it as such until
    // this issue is resolved: https://github.com/angular/angular/issues/25544
    @Optional()
    @Host()
    @SkipSelf()
    private parent: ControlContainer,
    @Inject(BOOTSTRAP_VERSION) private bootstrapVersion: BootstrapVersion,
  ) {}

  @HostBinding("class.is-valid")
  get validClass() {
    if (!this.control) {
      return false;
    }
    return (
      this.bootstrapFour &&
      this.control.valid &&
      (this.control.touched || this.control.dirty)
    );
  }

  @HostBinding("class.is-invalid")
  get invalidClass() {
    if (!this.control) {
      return false;
    }
    return (
      this.bootstrapFour &&
      this.control.invalid &&
      this.control.touched &&
      this.control.dirty
    );
  }

  get path() {
    return controlPath(this.formControlName, this.parent);
  }

  get control(): FormControl {
    return this.formDirective && this.formDirective.getControl(this);
  }

  get formDirective(): any {
    return this.parent ? this.parent.formDirective : null;
  }

  get bootstrapFour() {
    return this.bootstrapVersion === BootstrapVersion.Four;
  }
}
