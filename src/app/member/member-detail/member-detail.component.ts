import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from "../member.service";
import { MemberDetail } from "../../api.models";

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
   member: MemberDetail;
   loading: boolean = true;

  constructor(private route: ActivatedRoute, private memberService : MemberService) {
     this.member = null;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.memberService.Member(Number(id)).subscribe(member => {
      this.member = member;
      this.loading = false;
   });
  }
}
