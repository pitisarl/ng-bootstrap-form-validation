import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormValidationDirective } from "./directives/form-validation.directive";
import { MessagesComponent } from "./components/messages/messages.component";
import { ErrorMessageService } from "./services/error-message.service";
import { CUSTOM_ERROR_MESSAGES, BOOTSTRAP_VERSION } from "./tokens/tokens";
import { BootstrapVersion } from "./enums/BootstrapVersion";
import { FormGroupComponent } from "./components/form-group/form-group.component";
import { NgBootstrapFormValidationModuleOptions } from "./models/NgBootstrapFormValidationModuleOptions";
import { FormControlDirective } from "./directives/form-control.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [
    FormValidationDirective,
    FormGroupComponent,
    MessagesComponent,
    FormControlDirective
  ],
  exports: [
    FormValidationDirective,
    FormGroupComponent,
    MessagesComponent,
    FormControlDirective
  ]
})
export class NgBootstrapFormValidationModule {
  static forRoot(
    userOptions: NgBootstrapFormValidationModuleOptions = {
      bootstrapVersion: BootstrapVersion.Four
    }
  ): ModuleWithProviders<NgBootstrapFormValidationModule> {
    return {
      ngModule: NgBootstrapFormValidationModule,
      providers: [
        {
          provide: CUSTOM_ERROR_MESSAGES,
          useValue: userOptions.customErrorMessages || [],
          multi: true
        },
        {
          provide: BOOTSTRAP_VERSION,
          useValue: userOptions.bootstrapVersion
        },
        ErrorMessageService
      ]
    };
  }
}
