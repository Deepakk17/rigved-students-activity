import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StudentRecordActivity1Component } from './student-record-activity1/student-record-activity1.component';
import { ProductInfoActivity2Component } from './product-info-activity2/product-info-activity2.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingComponent,
    AttributeBindingComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    StudentRecordActivity1Component,
    ProductInfoActivity2Component
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
