import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NavConfig } from '../config/nav_urls';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   public loginForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ){
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm(): void{
this.loginForm = this.formBuilder.group({
  userName: ['', Validators.required],
  password: ['', Validators.required]
})
  }
  onSubmit(){
this.navigateAddReq()
  }

  navigateAddReq() {
this.router.navigate([NavConfig.addRequirment]);
  }
  // ngAfterViewInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }

  
}
