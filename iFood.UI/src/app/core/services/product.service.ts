import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models';
import { SearchResult } from '../models/search.result.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

  private resource = `${environment.apiUrl}product`;

  constructor(private http: HttpClient) { }

  get = (textSearch: string, page: number) => {
    const params = new HttpParams()
      .set('textSearch', textSearch)
      .set('page', page.toString());

    return this.http.get(this.resource, { params }) as Observable<SearchResult<Product>>;
  }
  post = (command: Product) => this.http.post(this.resource, command);
  put = (command: Product) => this.http.put(this.resource, command);
  delete = (id: string) => this.http.delete(`${this.resource}/${id}`);

}
