/** Angular */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Angular Material */
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

/** Components */
import { TotsFormComponent } from './components/tots-form/tots-form.component';
import { BasePrintFieldComponent } from './fields/base-print-field/base-print-field.component';
import { StringFieldComponent } from './fields/string-field/string-field.component';



@NgModule({
  declarations: [
    TotsFormComponent,
    BasePrintFieldComponent,
    StringFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [
    TotsFormComponent
  ]
})
export class TotsFormModule { }
