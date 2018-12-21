import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  private propertyForm: FormGroup;
  constructor(private propertyBuilder: FormBuilder) { }

  ngOnInit() {
    this.propertyForm = this.propertyBuilder.group({
      streetNo: [''],
      streetName: [''],
      addressLine: [''],
      city: [''],
      country: [''],
      postalCode: ['']
    });
  }

  public saveProperty() {
    console.log('saved', this.propertyForm);
  }
  public saveAndContinue() {

  }
}
