import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  productdetails;
  pd;
  constructor(private ss:SampleService,private rt:Router) { }

  ngOnInit() {

    this.ss.viewproducts().subscribe(data=>{
      //this.productdetails=data;
      this.productdetails=JSON.parse(JSON.stringify(data)).data;
      
      //console.log("productdetails:",this.productdetails);
  })  
  }
  public deleteitem(id)
  {
    this.ss.deletedata(id).subscribe(data=>{
      alert(JSON.parse(JSON.stringify(data)).msg);
      // this.restaurant=JSON.parse(JSON.stringify(data));
    })
    this.rt.navigateByUrl("/viewproducts")
  }

  public editproduct(id)
  {
    this.rt.navigateByUrl("/updateproduct/"+id)
  }

}
