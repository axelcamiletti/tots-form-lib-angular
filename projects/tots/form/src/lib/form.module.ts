/** Angular */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Components */
import { TotsFormComponent } from './components/tots-form/tots-form.component';
import { BasePrintFieldComponent } from './fields/base-print-field/base-print-field.component';



@NgModule({
  declarations: [
    TotsFormComponent,
    BasePrintFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TotsFormComponent
  ]
})
export class FormModule { }
