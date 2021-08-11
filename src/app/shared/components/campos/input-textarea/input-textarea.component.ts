import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidarCamposService } from 'src/app/shared/validarCampos/validar-campos.service';

@Component({
  selector: 'apss-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.css']
})
export class InputTextareaComponent  {

  @Input() formGroup!: FormGroup;
  @Input() titulo!: string;
  @Input() controlName!: string;

  constructor(public validacao: ValidarCamposService) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName]
    }

}
