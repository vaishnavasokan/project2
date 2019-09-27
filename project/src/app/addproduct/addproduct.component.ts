import { Component, OnInit } from '@angular/core';
import {SampleService} from '../sample.service';
import {Router} from '@angular/router'
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:3000/products/upload';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  public uploader:FileUploader=new FileUploader({
    url:URL,
    itemAlias:'productImage',
    method:'POST'
  });

  productName;
  productPrice;
  productImage;

  constructor() { }

  ngOnInit() {

    this.uploader.onAfterAddingFile=(file)=>{
      file.withCredentials=false;
    }
    this.uploader.onBuildItemForm=(file:any,form:any)=>
    {
      form.append('productName',this.productName);
      form.append('productPrice',this.productPrice);
      form.append('productImage',this.productImage);
    }
  }

  public addproduct()
  {
  this.uploader.uploadAll();    
    
  }

}
