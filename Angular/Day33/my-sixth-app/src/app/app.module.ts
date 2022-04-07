import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ProductsActivityComponent } from './products-activity/products-activity.component';
import { GoodsActivityComponent } from './goods-activity/goods-activity.component';
import { ChildActivityComponent } from './child-activity/child-activity.component';
import { ParentActivityComponent } from './parent-activity/parent-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ProductsActivityComponent,
    GoodsActivityComponent,
    ChildActivityComponent,
    ParentActivityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
