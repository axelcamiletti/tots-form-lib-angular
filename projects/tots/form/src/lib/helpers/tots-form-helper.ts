import { UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { TotsFieldForm } from "../entities/tots-field-form";

export class TotsFormHelper {
    /**
     * Crea un form control basico para el formulario
     * @param field 
     * @param group 
     * @returns 
     */
    static createFormControl(field: TotsFieldForm, group: UntypedFormGroup): UntypedFormControl {
        // Create Control
        let newInput = new UntypedFormControl();
        // Config validators
        if(field.validators != undefined && field.validators.length > 0){
            newInput.setValidators(field.validators);
        }
        // If include default value
        if(field.extra && field.extra.default_value){
          newInput.setValue(field.extra.default_value);
        }
        // Add in Group
        group.addControl(field.key, newInput);
        // Return control
        return newInput;
    }
    /**
     * Obtiene el valor de un objeto a traves de la KEY
     * @param item 
     * @param key 
     * @returns 
     */
    static getItemValueByKey(item: any, key: string|Array<string>|undefined): any {
        if(key == undefined){
            return '';
          }
    
          if (typeof key == 'string' && item[key] != undefined) {
            return item[key];
          }
    
          let valueFinal = item;
          for (const keyObj of key!) {
            if(valueFinal[keyObj] == undefined){
              return '';
            }
            valueFinal = valueFinal[keyObj];
          }
          return valueFinal;
    }
}