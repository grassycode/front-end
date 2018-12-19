import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from '../models/property.model';
import {serialize, deserialize} from '../../../node_modules/serializer.ts/Serializer';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  public getProperties(): Promise<any> {
    return this.http.get('/data/property.json')
    .toPromise()
    .then(resp => {
      const val = deserialize<Property[]>(Property, resp);
      console.log(val);
      return val;
    })
    .catch();
  }
}
