/*
* index.ts is a barrel roll file which basically is a single file that allows us to export everything
* Better to be specific than to just export everything. In this case export the UILoginModule and the LoginComponent
*/
// export * from './lib/ui-login.module';
export { UiLoginModule } from "./lib/ui-login.module";
export { LoginComponent } from './lib/login/login.component';
