import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info-activity2',
  templateUrl: './product-info-activity2.component.html',
  styleUrls: ['./product-info-activity2.component.css']
})
export class ProductInfoActivity2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  products = [
    {name: "Mobile", brand: ["Vivo", "Oppo", "Oneplus"]},
    {name: "Laptop", brand: ["HP", "Dell", "Lenovo", "Acer"]}
  ];

}
