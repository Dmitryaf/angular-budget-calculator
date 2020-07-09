import { BudgetItem } from './../../models/budget-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();

  constructor() { }

  ngOnInit() {
  }

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
  }

  deleteItem(item: BudgetItem) {
    const itemIndex: number = this.budgetItems.indexOf(item);
    this.budgetItems.splice(itemIndex, 1);
  }

}
