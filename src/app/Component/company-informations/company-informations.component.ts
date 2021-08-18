import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import{FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-company-informations',
  templateUrl: './company-informations.component.html',
  styleUrls: ['./company-informations.component.css']
})
export class CompanyInformationsComponent implements OnInit {
  companyForm = new FormGroup({
   companyName: new FormControl('', Validators.required),
   image: new FormControl('', Validators.required),
   eMail: new FormControl('', Validators.required),
   jobTitle: new FormControl('', Validators.required),
   jobExperience: new FormControl('', Validators.required)
  })

  file: any;
  imagePreview: any;

  @Output() myOutput: EventEmitter<Number>= new EventEmitter
  constructor() { }

  ngOnInit() {
    console.log(localStorage.getItem("companyForm"))
  }
  sendotp() {
    console.log(this.companyForm.value)
    console.log(this.companyForm.invalid)
    if(this.companyForm.invalid){
      return
    }
     
      console.log(this.companyForm.value.fullName)
      localStorage.setItem("companyForm",JSON.stringify(this.companyForm.value))
      this.myOutput.emit(3)
  }
  back(){
    this.myOutput.emit(1)
  }

  onImagePicker(event): void {
    const file = event.target.files[0];
    this.file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
        this.companyForm.patchValue({
          image: this.imagePreview
        })
        // this.imageValidation = false;
      };
      reader.readAsDataURL(file);
    }
  }
 }

