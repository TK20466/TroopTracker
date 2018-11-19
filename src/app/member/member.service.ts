import { Injectable } from '@angular/core';
import { ApiService } from "../api.service";
import { Observable, of as observableOf, merge } from 'rxjs';
import { MemberSimple, PagedAPI } from "../api.models";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private apiPath: string;
  constructor(apiService: ApiService, private http: HttpClient) {
          this.apiPath = apiService.path + "members/";
  }

  public Member(id: number) : MemberSimple {
     return null;
  }

  public Search(pageSize: number, pageNumber: number, sortBy: string, direction: string, filter: string) : Observable<PagedAPI<MemberSimple>> {
     return this.http.get<PagedAPI<MemberSimple>>(this.apiPath);
 }
}
