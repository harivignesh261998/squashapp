import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-personal-informations',
  templateUrl: './personal-informations.component.html',
  styleUrls: ['./personal-informations.component.css']
})
export class PersonalInformationsComponent implements OnInit {
 personalForm = new FormGroup({
   fullName: new FormControl('', Validators.required),
   gender: new FormControl('', Validators.required),
   country: new FormControl('', Validators.required),
   state: new FormControl('', Validators.required),
   phoneNumber: new FormControl('', Validators.required)
 })
 code = '';
 country = [
  {
    name: 'India',
    code: '+91'
  },
  {
    name: 'Ameria',
    code: '+80'
  },
  {
    name: 'London',
    code: '+43'
  }
 ]
 @Output() myOutput: EventEmitter<Number>= new EventEmitter

  constructor() { }

  ngOnInit() {
    console.log(localStorage.getItem("personalForm"))
  }
  selectstate(states){
    console.log(states)
    this.personalForm.patchValue({
      state:states

    })
  }

  selectcountry(countrys){
    console.log(countrys)
    this.personalForm.patchValue({
      country:countrys
    })
    const country = this.country.find(x => x.name === countrys);
    this.code = country.code;
  }

  gender(g){
    console.log(g)
    this.personalForm.patchValue({
      gender:g
    })
    
  }
  next() {
    console.log(this.personalForm.value)
    console.log(this.personalForm.invalid);
    if(this.personalForm.invalid){
      return
    }
    console.log(this.personalForm.value.fullName)
    localStorage.setItem("personalForm",JSON.stringify(this.personalForm.value))
   this.myOutput.emit(2)
  }
}

