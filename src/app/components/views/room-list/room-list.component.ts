import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Room } from 'src/app/domain/entity/Room';
import { RoomService } from 'src/app/domain/service/room.service';

@Component({
  selector: 'apss-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements AfterViewInit {

  rooms: Room[] = [];

  displayedColumns: string[] = ['id', 'nome', 'data', 'inicio', 'fim', 'status'];

  dataSource = new MatTableDataSource<Room>(this.rooms);

  constructor(private roomServe: RoomService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.listRooms();
  }

  listRooms(): void {
    this.roomServe.findAll().subscribe((resposta) =>{
      this.rooms = resposta;
      console.log(resposta);
    })
  }
}


