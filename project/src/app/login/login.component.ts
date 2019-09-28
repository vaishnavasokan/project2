import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { SampleService } from '../sample.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private rt: Router, private ss:SampleService) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  //get f() { return this.loginForm.controls; }

  login()
  {
    this.ss.checklogin(this.loginForm.controls.username.value, 
      this.loginForm.controls.password.value).subscribe(
        resultdata => {

          resultdata = JSON.parse(JSON.stringify(resultdata))
          console.log(resultdata);
          localStorage.setItem('user', JSON.stringify(resultdata))
          const id= JSON.stringify(JSON.parse(JSON.stringify(resultdata)).data._id)
          //console.log("userrrrrrrrr",id)
          this.rt.navigateByUrl('/viewproducts');
        
        })
  }

}
