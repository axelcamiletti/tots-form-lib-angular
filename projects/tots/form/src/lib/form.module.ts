/** Angular */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Angular Material */
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

/** Components */
import { TotsFormComponent } from './components/tots-form/tots-form.component';
import { BasePrintFieldComponent } from './fields/base-print-field/base-print-field.component';
import { StringFieldComponent } from './fields/string-field/string-field.component';
import { SubmitButtonFieldComponent } from './fields/submit-button-field/submit-button-field.component';
import { SelectFieldComponent } from './fields/select-field/select-field.component';



@NgModule({
  declarations: [
    TotsFormComponent,
    BasePrintFieldComponent,
    StringFieldComponent,
    SubmitButtonFieldComponent,
    SelectFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [
    TotsFormComponent
  ]
})
export class TotsFormModule { }
