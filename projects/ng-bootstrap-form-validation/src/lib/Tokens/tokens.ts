import { InjectionToken } from "@angular/core";
import { BootstrapVersion } from "../enums/BootstrapVersion";
import { ErrorMessage } from "../models/error-message";

export const CUSTOM_ERROR_MESSAGES = new InjectionToken<ErrorMessage[]>(
  "ng-bootstrap-form-validation custom error messages"
);

export const BOOTSTRAP_VERSION = new InjectionToken<BootstrapVersion>(
  "ng-bootstrap-form-validation module options"
);
