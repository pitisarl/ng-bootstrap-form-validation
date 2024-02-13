import { BootstrapVersion } from "../enums/BootstrapVersion";
import { ErrorMessage } from "./error-message";

export interface NgBootstrapFormValidationModuleOptions {
  customErrorMessages?: ErrorMessage[];
  bootstrapVersion: BootstrapVersion;
}
