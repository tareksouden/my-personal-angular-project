import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';

import { SpinnerService } from './shared/services/spinner.service';
import { PopinService } from './shared/services/popin.service';

import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { PopinComponent } from './shared/components/popin/popin.component';

import { PopinModule } from "./popin.module";
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    PopinModule,
    NgIdleKeepaliveModule.forRoot()
  ],
  providers: [
    SpinnerService,
    PopinService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
