import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { EventService } from "../event.service";
import { EventSimple, PagedAPI } from "../../api.models";
import {merge, Observable, of as observableOf, Subject} from 'rxjs';
import {catchError, map, startWith, switchMap, debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-event-table',
  templateUrl: './Event-table.component.html',
  styleUrls: ['./Event-table.component.css'],
})
export class EventTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  data: EventSimple[] = [];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  pageSize = 10;
  filter: string;
  filterChanged: Subject<string> = new Subject<string>();
  filtered: EventEmitter<string> = new EventEmitter();
  pageSizeOptions: number[] = [5, 10, 25, 100];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['title', 'startDate'];

  constructor(private EventService: EventService) {
     this.filterChanged
     .pipe(
        debounceTime(500),
       distinctUntilChanged())
        .subscribe((val) => this.filtered.emit(val));
  }

  ngOnInit() {
  // If the user changes the sort order, reset back to the first page.
  this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

  merge(this.sort.sortChange, this.paginator.page, this.filtered)
     .pipe(
      startWith({}),
      switchMap(() => {
         this.isLoadingResults = true;
         return this.getPagedData(
           this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize || this.pageSize, this.filter);
      }),
      map(data => {
         // Flip flag to show that loading has finished.
         this.isLoadingResults = false;
         this.isRateLimitReached = false;
         this.resultsLength = data.total;

         return data.items;
      }),
      catchError(() => {
         this.isLoadingResults = false;
         // Catch if the GitHub API has reached its rate limit. Return empty data.
         this.isRateLimitReached = true;
         return observableOf([]);
      })
     ).subscribe(data => this.data = data);
}

public applyFilter(value: string) {
   this.filterChanged.next(value);
}

private getPagedData(sort: string, order: string, page: number, pageSize: number, filter: string) {

  return this.EventService.Search(pageSize, page, sort, order, filter, false);
}
}
