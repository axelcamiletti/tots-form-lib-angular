import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { TotsActionForm } from 'projects/tots/form/src/lib/entities/tots-action-form';
import { SubmitButtonFieldComponent } from 'projects/tots/form/src/lib/fields/submit-button-field/submit-button-field.component';
import { StringFieldComponent, TotsFieldForm, TotsFormComponent } from 'projects/tots/form/src/public-api';

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

  onActionForm(action: TotsActionForm) {
    console.log(action);
  }

  configForm() {
    this.fields = [
      { key: 'title', component: StringFieldComponent, label: 'Titulo', validators: [Validators.required], extra: { caption: 'Este se mostrara publicamente...' } },
      { key: 'submit', component: SubmitButtonFieldComponent, label: 'Enviar' }
    ];
  }
}
