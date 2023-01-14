import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { IndexComponent } from './index.component';
import { CardComponent } from './card.component';
import { PlanningPokerComponent } from './planning-poker.component';
import { TimeboxComponent } from './timebox.component';

import { DurationPipe} from './duration.pipe';
import { SettingsService } from './settings.service';

const appRoutes: Routes = [
    { path: 'planning-poker/:num', component: CardComponent },
    { path: 'planning-poker', component: PlanningPokerComponent },
    { path: 'timebox', component: TimeboxComponent },
    { path: '', component: IndexComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    DurationPipe,
    AppComponent,
    HeaderComponent,
    IndexComponent,
    PlanningPokerComponent,
    CardComponent,
    TimeboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {})
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
