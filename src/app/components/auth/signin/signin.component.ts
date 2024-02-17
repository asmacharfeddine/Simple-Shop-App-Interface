import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user: User={
    email:"",
    password:""
  }


  //juste un objet ds lequel on va regrouper les elements de notre formulaire
  signinForm: FormGroup;

  email: FormControl;
  password: FormControl;

  // on veut associer un control à chaque element donc pour le faire, on utilise un objet appelé formBuilder qui est fb
  constructor(private fb: FormBuilder) {
    this.email = fb.control("",[Validators.email, Validators.required])
    this.password = fb.control("",[Validators.required, Validators.minLength(6)])

    this.signinForm = fb.group({
      email: this.email,
      password: this.password
    })

  }

  ngOnInit(): void {
  }

  handleSubmit(){
    console.log(this.signinForm.valid);

  }
}
