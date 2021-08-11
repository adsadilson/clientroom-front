import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidarCamposService } from 'src/app/shared/validarCampos/validar-campos.service';

@Component({
  selector: 'apss-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent {

  @Input() formGroup!: FormGroup;
  @Input() titulo!: string;
  @Input() controlName!: string;
  @Input() minimo = 0;
  @Input() maximo = 999;

  constructor(public validacao: ValidarCamposService) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName]
  }

}
