import { BudgetItem } from './../../../models/budget-item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.sass']
})
export class BudgetItemComponent implements OnInit {

  @Input() item: BudgetItem;

  constructor() { }

  ngOnInit() {
  }

}
