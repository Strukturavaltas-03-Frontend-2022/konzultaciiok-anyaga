import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ITableCol {
  [x: string]: any;
  title: string;
  key: string;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent<T extends {[x: string]: any}> implements OnInit {

  @Input() list: T[] = [];

  @Input() columns: ITableCol[] = [];

  @Input() pageSize: number = 10;

  @Output() onSelect: EventEmitter<T> = new EventEmitter();

  @Output() onRemove: EventEmitter<T> = new EventEmitter();

  currentPage: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  getPageNumbers(): number[] {
    const pageCount: number = Math.ceil(this.list.length / this.pageSize);
    let nums: number[] = [];
    for (let i = 0; i < pageCount; i++) {
      nums[i] = i +1;
    }

    return nums;
  }

  jumpToPage(pageNum: number): void {
    this.currentPage = pageNum;
  }

  raiseSelect(row: T): void {
    this.onSelect.emit(row);
  }

  raiseRemove(row: T): void {
    this.onRemove.emit(row);
  }

}
