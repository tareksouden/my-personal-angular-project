import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PopinComponent } from "./shared/components/popin/popin.component";

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
    PopinComponent
  ],

  providers: [],
  exports: [PopinComponent]

})
export class PopinModule {
}
