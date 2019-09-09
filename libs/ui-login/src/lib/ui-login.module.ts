/*
* To generate this module (including html, scss, and ts) into the libs, we can
    ng g c login --project=ui-login -d
* If that checks out, we can rerun the command without the dryrun flag
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginComponent],
  /* Be sure to export the component so that, I can register it as a rout in app-routing.module.ts */
  exports: [LoginComponent]
})
export class UiLoginModule {}
