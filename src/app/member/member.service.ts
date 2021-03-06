import { Injectable } from '@angular/core';
import { ApiService } from "../api.service";
import { Observable, of as observableOf, merge } from 'rxjs';
import { MemberSimple, MemberDetail, PagedAPI } from "../api.models";
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private apiPath: string;
  constructor(apiService: ApiService, private http: HttpClient) {
          this.apiPath = apiService.path + "members/";
  }

  public Member(id: number) : Observable<MemberDetail> {
     return this.http.get<MemberDetail>(this.apiPath + id);
  }

  public Search(pageSize: number, pageNumber: number, sortBy: string, direction: string, filter: string) : Observable<PagedAPI<MemberSimple>> {
     let params = new HttpParams();
     if (pageSize)
      params = params.append('pageSize', pageSize.toString());
     if (sortBy)
      params = params.append('sortBy', sortBy);
     if (direction)
      params = params.append('direction', direction);
     if (filter)
      params = params.append('filter', filter);
     if (pageNumber && pageSize)
      params = params.append('start', (pageNumber * pageSize).toString());
     return this.http.get<PagedAPI<MemberSimple>>(this.apiPath, {params: params});
 }
}
