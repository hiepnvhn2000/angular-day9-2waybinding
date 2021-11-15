import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: `
  <div class="toggle-wrapper" [class.checked]="checked" tabindex="0" (click)="checkedChange.emit(!this.checked)">
  <div class="toggle"></div>
</div>1`,
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent implements OnInit {
  @Input() checked: boolean;
  @Output() checkedChange = new EventEmitter<boolean>();
  toggle() {}
  ngOnInit() {}
}
