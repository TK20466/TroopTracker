import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MemberDetail, EventAttendenceSimple } from "../../../api.models";
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { EventService } from "../../../events/event.service";

@Component({
  selector: 'member-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {
   @Input() member : MemberDetail;
   data : MatTableDataSource<EventAttendenceSimple>;
  displayedColumns: string[] = ['title', 'startDate', 'costumed'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
   loading: boolean = true;

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
     this.eventService.MemberAttendence(this.member.id).subscribe(data => {
        this.data = new MatTableDataSource<EventAttendenceSimple>(data);
        this.data.paginator = this.paginator;
        this.loading = false;
     });
  }

}
