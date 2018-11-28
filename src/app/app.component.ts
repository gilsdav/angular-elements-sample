import { Component, Input, ViewEncapsulation, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-angular-elem',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {

  @Input() name = 'friend';
  focus: string;
  focusSet = false;
  increment = 0;

  @Output() incrementChange = new EventEmitter<number>();

  ngOnInit() {
    setInterval(() => {
      this.increment += 1;
      this.incrementChange.emit(this.increment);
    }, 5000);
  }

  setFocus(value) {
    this.focus = value;
    this.focusSet = true;
  }

}
