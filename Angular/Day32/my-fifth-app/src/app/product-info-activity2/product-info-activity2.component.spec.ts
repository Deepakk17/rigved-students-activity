import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfoActivity2Component } from './product-info-activity2.component';

describe('ProductInfoActivity2Component', () => {
  let component: ProductInfoActivity2Component;
  let fixture: ComponentFixture<ProductInfoActivity2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInfoActivity2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInfoActivity2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
