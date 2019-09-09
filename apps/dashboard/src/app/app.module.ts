import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* No longer need the module below because I will now have a standalone app-routing.module.ts */
// import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NxModule } from '@nrwl/nx';
import { MaterialModule } from '@workshop/material';
import { UiLoginModule } from '@workshop/ui-login';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    UiLoginModule,
    /*
    ** No longer need the module below because I will now have a standalone app-routing.module.ts
    ** Using AppRoutingModule instead
    */
    // RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    AppRoutingModule
    /*
    ** Now will need UILogin Module to add login.component.ts as a route to app-routing.module.ts
    */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
