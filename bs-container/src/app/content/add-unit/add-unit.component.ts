import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.css']
})
export class AddUnitComponent implements OnInit {
  private unitForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router
  ) { }

  ngOnInit() {
    this.unitForm = this.formBuilder.group({
      unitNo: [''],
      bathrooms: [''],
      kitchens: [''],
      livingRooms: ['']
    });
  }

  public addAnother() {
    this.route.navigated = false;
    this.route.navigateByUrl('add-unit', { skipLocationChange: true }).then(() =>
      this.route.navigate(['add-unit']));
  }

  public saveAndExit() {

  }
}
