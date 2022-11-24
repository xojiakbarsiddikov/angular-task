import {Component, Input} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss']
})
export class TestInputComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  @Input()
  value: string;

  @Input()
  type: string;

  @Input()
  checked: boolean;

  @Input()
  name: string
}
