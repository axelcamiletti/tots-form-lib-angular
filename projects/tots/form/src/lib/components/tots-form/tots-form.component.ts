import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { TotsFieldForm } from '../../entities/tots-field-form';

@Component({
  selector: 'tots-form',
  templateUrl: './tots-form.component.html',
  styleUrls: ['./tots-form.component.scss']
})
export class TotsFormComponent implements OnInit {

  @Input() fields: Array<TotsFieldForm> = new Array<TotsFieldForm>();
  @Input() item: any;

  group: UntypedFormGroup = new UntypedFormGroup({});

  constructor(
    protected changeDetector: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //this.updateValuesToItem();
    this.changeDetector.detectChanges();
  }
}
