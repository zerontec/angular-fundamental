import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {GitSearchService} from './git-search.service';
import { GitSearchComponent } from './git-search/git-search.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NoFoundComponent } from './no-found/no-found.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent ,
  },
  { path: 'search', component: GitSearchComponent,
    data: { 
      title: 'Git Search'
    }
  },
  { path: '**', component: NoFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent,
    HomePageComponent,
    NoFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
    
  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
