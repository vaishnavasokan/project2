import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {SampleService} from '../sample.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  userdetails;

  constructor(private fb: FormBuilder, private ss :SampleService) { }

  ngOnInit() {

    this.initForm();

  }

  initForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
    })
  }

  signup()
  {
    console.log("ts file",this.registerForm.value)

    this.ss.adduser(this.registerForm.value).subscribe(data => {
      this.userdetails = data;
    })
  }
}
