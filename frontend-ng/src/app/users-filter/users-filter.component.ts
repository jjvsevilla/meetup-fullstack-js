import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-users-filter',
  template: `
    <div>
      <label>
        <span>Filter users by: <b>isAlive</b></span>
        <input
          type="checkbox"
          checked="isAlive"
          (change)="handleChange($event)"
        />
      </label>
    </div>
  `,
  styles: []
})
export class UsersFilterComponent {
  @Input() isAlive: boolean;
  @Output() onChange: EventEmitter<boolean> = new EventEmitter();

  handleChange($event) {
    this.onChange.emit($event.target.checked);
  }
}
