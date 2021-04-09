import { UserService } from './../BackEnd/services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  senha = 'senhaboa';
  formulario: FormGroup;

  constructor(private userService: UserService) {}

  estaLogando = true;

  ngOnInit() {
    this.formulario = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      senha: new FormControl(null, Validators.required),
      senhaConfirmar: new FormControl(null, Validators.required)
    });
  }

  TrocaBox() {
    this.estaLogando = !this.estaLogando;
  }
  verificaValidTouched(campo) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }
  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }
}
