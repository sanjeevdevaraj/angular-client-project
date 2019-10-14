import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'pop-up.component',
    templateUrl: 'pop-up.component.html',
  })
  export class PopUpComponent {
  
    constructor(
      public dialogRef: MatDialogRef<PopUpComponent>,
      @Inject(MAT_DIALOG_DATA) public data: String) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }