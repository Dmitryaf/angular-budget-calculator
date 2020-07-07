import { BudgetItem } from './../../models/budget-item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.sass']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];

  constructor() { }

  ngOnInit() {
  }

}
