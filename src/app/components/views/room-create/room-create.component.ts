import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Room } from 'src/app/domain/entity/Room';
import { RoomService } from 'src/app/domain/service/room.service';
import { ValidarCamposService } from 'src/app/shared/validarCampos/validar-campos.service';


@Component({
  selector: 'apss-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.css']
})
export class RoomCreateComponent implements OnInit {

  formulario!: FormGroup;
  room: Room = new Room();

  constructor(
    public validacao: ValidarCamposService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private roomService: RoomService,
    private formBuilder: FormBuilder
  ) { }

  get f() {
    return this.formulario.controls;
  }

  ngOnInit(): void {
    this.room.id = this.activatedRoute.snapshot.params['id'];
    if (this.room.id) {
      this.roomService.buscarPorId(this.room.id)
        .subscribe((room: Room) => this.createForm(room));
    } else {
      this.createForm(new Room);
    }
  }


  createForm(room: Room) {
    this.formulario = this.formBuilder.group({
      name: [room.name, [Validators.required, Validators.minLength(4), Validators.maxLength(80)]],
      date: [room.date, Validators.required],
      startHour: [room.startHour, [Validators.required, Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)]],
      endHour: [room.endHour, [Validators.required, Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)]],
      active: [room.active]
    })
  }

  onSubmit() {
    this.formulario.markAllAsTouched();
    if (this.formulario.invalid) {
      return;
    }

    /*
    if (this.room.id == null) {
      alert("Novo registros" + JSON.stringify(this.formulario.value, null, 4))
    }else{
      alert("Edição!\n" + JSON.stringify(this.formulario.value, null, 4))
    }*/

    if (this.room.id == null) {
      const room = this.formulario.getRawValue();
      this.roomService.salvar(room).subscribe((resposta) => {
        this.router.navigate(["rooms"])
        this.roomService.mensagem('Registro salvo com sucesso!');
      });
    } else {
      const room = this.formulario.getRawValue();
          this.roomService.atualizar(room).subscribe((resposta) => {
        this.router.navigate(["rooms"])
        this.roomService.mensagem('Registro atualizado com sucesso!');
      });
    }

  }

  reiniciarForm() {
    this.formulario.reset();
  }


}
