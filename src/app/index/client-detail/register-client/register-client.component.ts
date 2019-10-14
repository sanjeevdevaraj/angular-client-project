import { Component, OnInit ,Inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientDataService } from '../service/client-data-service';
import {MatDialog} from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';

export interface DialogData {
    animal: 'panda' | 'unicorn' | 'lion';
  }

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private dialog: MatDialog,
      private clientDataService : ClientDataService
  ) {}

  ngOnInit() {
    this.submitted = false;
    this.loading = false;
      this.loginForm = this.formBuilder.group({
        clientName: ['', Validators.required],
        countryCode: ['91', Validators.required],
        phoneNumber: ['', Validators.required],
        emailId: ['',Validators.compose([Validators.required,
          Validators.pattern('[a-zA-Z0-9.-_]{3,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')])],
        homeLoan: [0],
        contactMe: [0],
        terms:[0]
      });
  }

  get f() { return this.loginForm.controls; }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopUpComponent, {
     width: '60%',
     height : '90%',
      data: ''
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
} 

  onSubmit() {
      this.submitted = true;
      console.info(this.loginForm.value);
      // stop here if form is invalid
      if (this.loginForm.invalid && this.f.terms.value!=true) {
          return;
      }
      this.loading = true;
      this.clientDataService.saveClientDetails(this.loginForm.value).subscribe(
              data => {
                  this.ngOnInit()
              },
              error => {
                  this.loading = false;
              });
  }
}

