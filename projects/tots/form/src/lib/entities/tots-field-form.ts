import { ValidatorFn } from "@angular/forms";

export class TotsFieldForm {
    component: any;
    key: string = '';
    label?: string = '';
    validators?: ValidatorFn[] = [];
    extra?: any;
}