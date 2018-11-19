import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MemberTableDataSource } from './member-table-datasource';
import { MemberService } from "../member.service";

@Component({
  selector: 'app-member-table',
  templateUrl: './member-table.component.html',
  styleUrls: ['./member-table.component.css'],
})
export class MemberTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MemberTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'forumHandle', 'legionId'];

  constructor(private memberService: MemberService) {

  }

  ngOnInit() {
    this.dataSource = new MemberTableDataSource(this.paginator, this.sort, this.memberService);
  }
}
