import { Component, EventEmitter, Input, Output } from '@angular/core';

/** @title Datepicker inline calendar example */
@Component({
  selector: 'datepicker-inline-calendar-example',
  templateUrl: 'datapicker.component.html',
  styleUrls: ['datapicker.component.scss'],
})
export class DatapickerComponent {

  @Output() selectedChange = new EventEmitter<Date | null>();

  private _selected: Date | null = new Date();
  public get selected(): Date | null {
    return this._selected;
  }
  @Input()
  public set selected(value: Date | null) {
    if (this._selected !== value) {
      this._selected = value;// меняю тут дату и в ивент емиитере (selected change ф)
    }
    this.selectedChange.emit(this.selected);
  }
}
