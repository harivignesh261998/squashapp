import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  personalForm = true;
  companyForm = false;
  otp = false
  mainText = 'Add your Personal Details';
  subText = 'Lorem Ipsum is not simply random text';
  constructor(private router: Router) { }

  ngOnInit() {
  
  }

  getValue(value){
    console.log(value);
    if (value === 1) {
      this.personalForm = true;
      this.companyForm = false;
      this.otp = false;
      this.mainText = 'Enter your personal details';
      this.subText = 'Lorem Ipsum is not simply random text';
    } else if (value === 2) {
      this.personalForm = false;
      this.companyForm = true;
      this.otp = false;
      this.mainText = 'Add your Company Details';
    } else if(value === 3){
      this.personalForm = false;
      this.companyForm = false;
      this.otp = true;
      this.mainText= 'Enter your OTP';
    } else if (value === 4) {
      this.router.navigate(['/welcome'])
    }
  }
  
}
