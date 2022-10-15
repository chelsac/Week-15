import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-lis',
  templateUrl: './product-lis.component.html',
  styleUrls: ['./product-lis.component.css']
})
export class ProductLisComponent implements OnInit {

  constructor() { }
  title:String="Product List"
  ngOnInit(): void {
  }

}
