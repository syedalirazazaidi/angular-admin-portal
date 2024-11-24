import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private BaseUrl = 'https://neir.staging.virtualdoc.akdndhrc.org/api';

  constructor(private http: HttpClient) {}

  getMenuList(claim_id: string, organisation_id: string): Observable<any> {
    return this.http.get(
      `${this.BaseUrl}/MenuList/GetMenuList?claim=${claim_id}&organizationId=${organisation_id}`
    );
  }
}
