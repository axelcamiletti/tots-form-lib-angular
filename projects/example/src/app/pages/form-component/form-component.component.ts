import { Component, OnInit } from '@angular/core';
import { StringFieldComponent, TotsFieldForm } from 'projects/tots/form/src/public-api';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {

  fields = new Array<TotsFieldForm>();

  constructor() { }

  ngOnInit(): void {
    this.configForm();
  }

  configForm() {
    this.fields = [
      { key: 'title', component: StringFieldComponent, label: 'Titulo', extra: { caption: 'Este se mostrara publicamente...', disabled: true } }
    ];
  }
}
