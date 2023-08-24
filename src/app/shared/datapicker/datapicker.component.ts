import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';

/** @title Datepicker inline calendar example */
@Component({
  selector: 'datepicker-inline-calendar-example',
  templateUrl: 'datapicker.component.html',
  styleUrls: ['datapicker.component.scss'],
  standalone: true,
  imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatCardModule, MatDatepickerModule, MatNativeDateModule],
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
      this.selectedChange.emit(this._selected)
    }
  }
}
