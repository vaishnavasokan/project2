import { Component, OnInit } from '@angular/core';
import {SampleService} from '../sample.service'
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
id;
productdetails;
productName;
productPrice;
productImage;

  constructor(private ar:ActivatedRoute, private ss:SampleService) { }

  ngOnInit() {
    this.id=this.ar.snapshot.paramMap.get("id")
    console.log(this.id);

    this.ss.viewdata(this.id).subscribe(data=>{

      this.productdetails=data;
      console.log("view :",this.productdetails);

      // this.productName=this.productdetails.productName;
      // console.log(this.productName)
      // this.productPrice=this.productdetails.productPrice;
      // this.productImage=this.productdetails.productImage;
  
  })
 
  

}
}
