import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Room } from 'src/app/domain/entity/Room';


@Component({
  selector: 'apss-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.css']
})
export class RoomCreateComponent implements OnInit {

  cadastro!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  get f() {
    return this.cadastro.controls;
  }

  ngOnInit(): void {
    this.createForm(new Room());
  }


  createForm(room: Room) {
    this.cadastro = this.formBuilder.group({
      name: [room.name, Validators.required, Validators.minLength(4), Validators.maxLength(80)],
      date: [room.date, Validators.required],
      startHour: [room.startHour, Validators.required],
      endHour: [room.endHour, Validators.required],
      active: [room.active, Validators.required]
    })
  }

  onSubmit() {
    this.cadastro.markAllAsTouched();
    if (this.cadastro.invalid) {
      return;
    }
    //alert("Registro Salvo com sucesso!\n" + JSON.stringify(this.formRoom.value, null, 4))
  }

  reiniciarForm() {
    this.cadastro.reset();
  }

}
