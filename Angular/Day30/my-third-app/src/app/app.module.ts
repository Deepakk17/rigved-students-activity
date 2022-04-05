import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { StructuralDemoComponent } from './structural-demo/structural-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    PipeDemoComponent,
    StructuralDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
