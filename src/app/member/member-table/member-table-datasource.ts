import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { MemberSimple, PagedAPI } from "../../api.models";
import { MemberService } from "../member.service";

/**
 * Data source for the MemberTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class MemberTableDataSource extends DataSource<MemberSimple> {
  data: MemberSimple[] = [];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(private paginator: MatPaginator, private sort: MatSort, private memberService: MemberService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<MemberSimple[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this!.getPagedData(this.data);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total_count;

          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);

    // Set the paginator's length
    this.paginator.length = this.data.length;
    this.getPagedData(this.data);
    return null;
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: MemberSimple[]) {
     var x = this.memberService.Search(5, 1, "name", "asc", "Alay");
    return this.memberService.Search(5, 1, "name", "asc", "Alay");
  }

}
