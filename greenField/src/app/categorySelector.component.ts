import { Component } from '@angular/core';

@Component({
  selector: 'category-selector',
  templateUrl: './categorySelector.component.html',
  styleUrls: ['./categorySelector.component.css']
})

export class CategorySelectorComponent {

  page = 'content';

  categories = {
    tracker: ['Peter', 'Paul', 'Mary'],
    content: ['Recommended', 'Basics', 'Communication'],
    activities: ['Recommended', 'Dates', 'Conversations'],
    questions: ['About You', 'About Relationship', 'About Partner']
  };

  category = this.categories[this.page][0];



  handleRightClick() {
    // console.log('right Click');
    var currentIndex = this.categories[this.page].indexOf(this.category);
    var totalCategories = this.categories[this.page].length;

    if ( currentIndex === totalCategories - 1) {
    this.category = this.categories[this.page][0]
    } else {
    this.category = this.categories[this.page][currentIndex + 1]
    }
  }

  handleLeftClick() {
    // console.log('left Click');
    var currentIndex = this.categories[this.page].indexOf(this.category);
    var totalCategories = this.categories[this.page].length;

    if ( currentIndex === 0 ) {
    this.category = this.categories[this.page][totalCategories - 1]
    } else {
    this.category = this.categories[this.page][currentIndex - 1]
    }
  }

  }
