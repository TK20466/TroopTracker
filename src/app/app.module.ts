import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberTableComponent } from './member/member-table/member-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatDividerModule } from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventTableComponent } from './events/event-table/event-table.component';
import { HeaderComponent } from './member/member-detail/header/header.component';
import { AttendenceComponent } from './member/member-detail/attendence/attendence.component';

const appRoutes: Routes = [
   { path: 'member/:id',      component: MemberDetailComponent },
   {
     path: 'members',
     component: MemberListComponent
   },
   { path: 'event/:id',      component: EventDetailComponent },
   {
     path: 'events',
     component: EventListComponent
   },
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MemberDetailComponent,
    MemberListComponent,
    PageNotFoundComponent,
    AppNavComponent,
    HomeComponent,
    MemberTableComponent,
    EventListComponent,
    EventTableComponent,
    EventDetailComponent,
    HeaderComponent,
    AttendenceComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
   ),
   MatSidenavModule,
   LayoutModule,
   MatToolbarModule,
   MatButtonModule,
   MatIconModule,
   MatListModule,
   MatTableModule,
   MatPaginatorModule,
   MatSortModule,
   MatInputModule,
   MatCardModule,
   MatTooltipModule,
   MatGridListModule,
   MatProgressBarModule,
   MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
