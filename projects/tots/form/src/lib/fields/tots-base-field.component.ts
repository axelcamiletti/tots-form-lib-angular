import { Component, Input, OnInit } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { TotsFieldForm } from "../entities/tots-field-form";
import { TotsFormHelper } from "../helpers/tots-form-helper";

@Component({
    selector: 'tots-base-field',
    template: ''
})
export class TotsBaseFieldComponent implements OnInit {

    @Input() field!: TotsFieldForm;
    @Input() group!: UntypedFormGroup;

    input!: UntypedFormControl;

    constructor() { }

    ngOnInit(): void {
        this.input = TotsFormHelper.createFormControl(this.field, this.group);
    }

    getAppearance() {
        if(this.field.extra && this.field.extra.appearance){ return this.field.extra.appearance; }
        return 'standard';
    }

    getClases() {
        if(this.field.extra && this.field.extra.classes){ return this.field.extra.classes; }
        return '';
    }

    getPlaceholder() {
        if(this.field.extra && this.field.extra.placeholder){ return this.field.extra.placeholder; }
        return '';
    }

    isDisabled(): boolean {
        if(this.field.extra && this.field.extra.disabled){ return this.field.extra.disabled; }
        return false;
    }
}
