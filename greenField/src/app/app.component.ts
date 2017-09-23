import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';


import { ActivitiesComponent } from './activities.component';
import { ContentComponent } from './content.component';
import { ProfileComponent } from './profile.component';
import { TrackerComponent } from './tracker.component';
import { QuestionsComponent } from './questions.component';
import { CategorySelectorComponent } from './categorySelector.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
}
