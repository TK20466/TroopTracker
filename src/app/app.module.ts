import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'member/:id',      component: MemberDetailComponent },
  {
    path: 'members',
    component: MemberListComponent
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
  ],
  imports: [
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
   MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
