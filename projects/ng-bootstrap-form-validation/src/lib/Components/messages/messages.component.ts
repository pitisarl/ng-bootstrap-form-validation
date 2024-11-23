import { Component, Inject, Input } from "@angular/core";
import { BOOTSTRAP_VERSION } from "../../tokens/tokens";
import { BootstrapVersion } from "../../enums/BootstrapVersion";

@Component({
  selector: "bfv-messages",
  template: `
    <span [ngClass]="className" *ngFor="let message of messages()">{{
      message
    }}</span>
  `,
  styles: [
    `
      .invalid-feedback,
      .valid-feedback {
        display: block;
      }
    `
  ]
})
export class MessagesComponent {
  constructor(
    @Inject(BOOTSTRAP_VERSION) private bootstrapVersion: BootstrapVersion
  ) {}

  get className() {
    switch (this.bootstrapVersion) {
      case BootstrapVersion.Three:
        return "help-block";
      case BootstrapVersion.Four:
        return "invalid-feedback";
    }
  }

  @Input()
  public messages = () => [];
}
