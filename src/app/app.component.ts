import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Анкета';

  formJSON: InputInterface[] = [
    {
      value: 'anvar0142',
      name: 'username',
      label: "Username",
      type: EInputTypes.TextInput
    },
    {
      value: '23',
      name: 'age',
      label: "Username",
      type: EInputTypes.TextInput
    }
  ]

}

enum EInputTypes {
  TextInput = 'text',
  NumberInput = 'number',
  Dropdown = 'dropdown',
  Checkbox = 'checkbox'
}

interface InputInterface {
  value: string,
  label: string,
  name: string,
  description?: string,
  type: EInputTypes,
  options?: DropdownOption[]
}

interface DropdownOption {
  label: string,
  value: string
}
