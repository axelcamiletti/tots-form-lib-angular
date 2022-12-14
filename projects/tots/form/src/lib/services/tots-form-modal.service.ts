import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TotsFormModalComponent } from '../../public-api';
import { TotsActionForm } from '../entities/tots-action-form';
import { TotsModalConfig } from '../entities/tots-modal-config';

@Injectable({
  providedIn: 'root'
})
export class TotsFormModalService {

  constructor(
    protected dialog: MatDialog
  ) { }

  open(config: TotsModalConfig): Observable<TotsActionForm> {
    let dialogRef = this.dialog.open(TotsFormModalComponent, {
      width: '700px',
      data: config
    });
    return dialogRef.componentInstance.actions;
  }
}
