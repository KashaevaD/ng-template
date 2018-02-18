import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { IAnimal } from '../../types/animal';

@Component({
  selector: 'app-timing',
  templateUrl: './timing.component.html',
  styleUrls: ['./timing.component.scss'],
  host: {
    class: 'timing'
  }
})
export class TimingComponent implements OnInit {

  @ViewChild('insertTemplate', { read: ViewContainerRef })
  public insertTemplate: ViewContainerRef;

  @ViewChild('itemTemplate')
  public itemTemplate: TemplateRef<any>;

  public animal: IAnimal = {
    name: 'Hedgehog',
    description: 'The happiest animal'
  };
  public items: any[] = new Array(1000);
  public isShowNgTemplate: boolean = false;
  public isShowSimple: boolean = false;

  public constructor() { }

  public ngOnInit(): void {
  }

  public showViewContainerRef(): void {
    for (let i: number = 0; i < this.items.length; i++) {
      this.insertTemplate.createEmbeddedView(this.itemTemplate, { item: this.animal, index: i });
    }
  }

}
