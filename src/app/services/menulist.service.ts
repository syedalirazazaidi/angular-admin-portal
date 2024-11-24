import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private baseUrl = 'https://neir.staging.virtualdoc.akdndhrc.org/api';

  constructor(private http: HttpClient) {}

  getMenuList(claim_id: string, organisation_id: string): Observable<any> {
    const params = new HttpParams()
      .set('claim', claim_id)
      .set('organizationId', organisation_id);

    return this.http.get(`${this.baseUrl}/MenuList/GetMenuList`, { params });
  }
}
