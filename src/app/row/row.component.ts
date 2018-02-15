import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  host: {
    class: 'row'
  }
})
export class RowComponent  {

  @HostBinding('class.row--header')
  @Input() public header: boolean = false;

}
