import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Room } from 'src/app/domain/entity/Room';


@Component({
  selector: 'apss-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.css']
})
export class RoomCreateComponent implements OnInit {

  formRoom!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(new Room());
  }


  createForm(room: Room) {
    this.formRoom = this.formBuilder.group({
      name: [room.name, Validators.required, Validators.minLength(4)],
      date: [room.date, Validators.required],
      startHour: [room.startHour, Validators.required],
      endHour: [room.endHour, Validators.required],
      active: [room.active]
    })
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar

  }

  reiniciarForm(){

  }

}
