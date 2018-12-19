import { Component, OnInit } from '@angular/core';
import { ContentService } from './content.service';
import { Property } from '../models/property.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  private properties: Property[];
  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.contentService.getProperties().then((resp: Property[]) => {
      console.log(resp);
      this.properties = resp;
    });
  }

}
