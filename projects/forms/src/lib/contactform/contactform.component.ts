import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// standalone: true,
//   imports: [],

@Component({
  selector: 'lib-contactform',
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.css'
})
export class ContactformComponent implements OnInit{

  contactForm!: FormGroup;
  formErrors: {
    [key: string]: boolean;
  } = {
    firstnameError: false,
    
    userEmailRequiredError: false,
    userEmailValidError: false,
    messagetextError: false,
  };
  validmsg!: boolean;

  ngOnInit(): void {

    this.contactForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      
      useremail: new FormControl('', [Validators.required, Validators.email]),
      messagetext: new FormControl('', [Validators.required]),
    });
    
  }


  submit(){

    console.log("submited");
    console.log(this.contactForm)
    console.log("submitted")
    Object.keys(this.formErrors).forEach((key) => (this.formErrors as any)[key] = false);

    this.validmsg = false;

    for (const control in this.contactForm.controls) {
      if (control !== 'useremail' && this.contactForm.get(control)?.invalid) {
        this.formErrors[control + 'Error'] = true;
      }
    }
    
    const useremailControl = this.contactForm.get('useremail');
    if (!useremailControl?.value) {
      this.formErrors['userEmailRequiredError'] = true;
    } else if (useremailControl.touched && useremailControl.invalid) {
      this.formErrors['userEmailValidError'] = true;
    }
    console.log(this.contactForm)
    console.log(this.contactForm.valid);
    if (this.contactForm.valid) {
      this.validmsg = true;
      console.log(this.contactForm.value);
      this.contactForm.reset();
    }
  }

}
