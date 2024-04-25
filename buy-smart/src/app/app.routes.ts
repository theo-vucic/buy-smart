import { Routes } from '@angular/router';
import { MyListComponent } from './my-list/my-list.component';
import { AuctionsComponent } from './auctions/auctions.component';
import { MyPageComponent } from './my-page/my-page.component';
import { ExamplePageComponent } from './example-page/example-page.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'annonces', component: MyListComponent },
  { path: 'auctions', component: AuctionsComponent },
  { path: 'my-page', component: MyPageComponent },
  { path: 'example-page', component: ExamplePageComponent },
  { path: 'details', component: DetailsComponent },
];
