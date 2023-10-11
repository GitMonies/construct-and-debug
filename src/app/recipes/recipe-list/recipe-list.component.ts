import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is simply a test', 'https://www.recipetineats.com/wp-content/uploads/2023/09/Homemade-pork-sausage-patties_2.jpg' ),
new Recipe('A Test Recipe', 'This is simply a test', 'https://www.recipetineats.com/wp-content/uploads/2023/09/Homemade-pork-sausage-patties_2.jpg' )
];

constructor() { }

ngOnInit() {

}

}
