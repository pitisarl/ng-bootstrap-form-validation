import { Component, OnDestroy, OnInit } from "@angular/core";
import { BOOTSTRAP_VERSION } from "../../../projects/ng-bootstrap-form-validation/src/lib/tokens/tokens";
import { BootstrapVersion } from "../../../projects/ng-bootstrap-form-validation/src/lib/enums/BootstrapVersion";

@Component({
  selector: "app-bootstrap-three",
  templateUrl: "./bootstrap-three.component.html",
  styleUrls: ["./bootstrap-three.component.css"],
  providers: [
    {
      provide: BOOTSTRAP_VERSION,
      useValue: BootstrapVersion.Three
    }
  ]
})
export class BootstrapThreeComponent implements OnInit, OnDestroy {
  link: HTMLLinkElement;

  constructor() {}

  ngOnInit() {
    this.link = document.createElement("link");
    this.link.href =
      "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
    this.link.rel = "stylesheet";
    document.head.appendChild(this.link);
  }

  ngOnDestroy() {
    document.head.removeChild(this.link);
  }
}
