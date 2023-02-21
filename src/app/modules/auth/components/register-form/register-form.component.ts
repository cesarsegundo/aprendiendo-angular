import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm:FormGroup = new FormGroup({})
  
  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        email: new FormControl('',{
          validators: [Validators.required, Validators.email]
        }),
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        password: new FormControl('', [Validators.required, Validators.minLength(3)]),
        passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(3)])
      },
      {
        validators: passwordMatchValidator
      }
    )
  }
  testLoaded():void {
    const mockData = {
      email: 'cesar@gmail.com',
      name: 'Cesar',
      password: '123'
    }
  }
}

function passwordMatchValidator(formCurrent:AbstractControl | FormGroup):any {
  const valuePassword = formCurrent.get('password')?.value
  const valuePasswordConfirm = formCurrent.get('passwordConfirm')?.value
  // retornar un null significa que no hay error, es decir que se cumplio
  // la validacion. Si no se cumple entonces se retorna el error
  return (valuePassword == valuePasswordConfirm) ? null : {'mismatch': true}
}