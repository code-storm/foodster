import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { APIURLS } from './contants';

import "rxjs/add/operator/map";
import { FoodItem } from './order.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<FoodItem[]> {
    return this.http.get(APIURLS.getAllItems)
      .map((response: { data: any[], success: boolean, message: string }) => {
        return response.data as any[]
      });
  }
}
