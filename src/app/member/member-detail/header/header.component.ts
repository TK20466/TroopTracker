import { Component, OnInit, Input } from '@angular/core';
import { MemberDetail } from "../../../api.models";

@Component({
  selector: 'member-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   @Input() member : MemberDetail;
  constructor() { }

  ngOnInit() {
  }

}
