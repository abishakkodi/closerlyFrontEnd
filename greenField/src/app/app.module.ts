import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';



import { AppComponent } from './app.component';
import { ContentComponent } from './content.component';
import { ActivitiesComponent } from './activities.component';
import { ProfileComponent } from './profile.component';
import { QuestionsComponent } from './questions.component';
import { TrackerComponent } from './tracker.component';
import { CategorySelectorComponent } from './categorySelector.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ActivitiesComponent,
    ProfileComponent,
    QuestionsComponent,
    TrackerComponent,
    CategorySelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
