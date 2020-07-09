import { BudgetItem } from './../../../models/budget-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.sass']
})
export class BudgetItemComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() btnDeleteClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onBtnDeleteClick() {
    this.btnDeleteClick.emit();
  }

  onBudgetItemClick() {
    this.itemClick.emit();
  }

}
