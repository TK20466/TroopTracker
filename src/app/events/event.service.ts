import { Injectable } from '@angular/core';
import { ApiService } from "../api.service";
import { Observable, of as observableOf, merge } from 'rxjs';
import { EventSimple, EventAttendenceSimple, PagedAPI } from "../api.models";
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiPath: string;
  constructor(apiService: ApiService, private http: HttpClient) {
          this.apiPath = apiService.path + "events/";
  }

  public Event(id: number) : EventSimple {
     return null;
  }

  public Search(pageSize: number, pageNumber: number, sortBy: string, direction: string, filter: string, futureOnly: boolean) : Observable<PagedAPI<EventSimple>> {
     let params = new HttpParams();
     if (pageSize)
      params = params.append('pageSize', pageSize.toString());
     if (sortBy)
      params = params.append('sortBy', sortBy);
     if (direction)
      params = params.append('direction', direction);
     if (filter)
      params = params.append('filter', filter);
     if (futureOnly)
      params = params.append('FutureEventsOnly', "true");
     if (pageNumber && pageSize)
      params = params.append('start', (pageNumber * pageSize).toString());
     return this.http.get<PagedAPI<EventSimple>>(this.apiPath, {params: params});
 }

 public MemberAttendence(memberId: number): Observable<EventAttendenceSimple[]> {
    return this.http.get<EventAttendenceSimple[]>(this.apiPath + "attendence/member/" + memberId);
 }
}
