import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Room } from 'src/app/domain/entity/Room';
import { ValidarCamposService } from 'src/app/shared/validarCampos/validar-campos.service';


@Component({
  selector: 'apss-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.css']
})
export class RoomCreateComponent implements OnInit {

  formulario!: FormGroup;

  constructor(public validacao: ValidarCamposService, private formBuilder: FormBuilder) { }

  get f() {
    return this.formulario.controls;
  }

  ngOnInit(): void {
    this.createForm(new Room());
  }


  createForm(room: Room) {
    this.formulario = this.formBuilder.group({
      name: [room.name, [Validators.required, Validators.minLength(4), Validators.maxLength(80)]],
      date: [room.date, Validators.required],
      startHour: [room.startHour, [Validators.required, Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)]],
      endHour: [room.endHour, [Validators.required, Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)]],
      active: [room.active, Validators.required]
    })
  }

  onSubmit() {
    this.formulario.markAllAsTouched();
    if (this.formulario.invalid) {
      return;
    }
    alert("Registro Salvo com sucesso!\n" + JSON.stringify(this.formulario.value, null, 4))
  }

  reiniciarForm() {
    this.formulario.reset();
  }

 
}
