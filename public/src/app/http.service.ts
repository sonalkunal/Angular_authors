import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private _http: HttpClient) {}



  getAllAuthors() {
    return this._http.get('/api/authors');
  }

  createAuthor(newAuthor) {
    console.log("Step 2")
    return this._http.post('/api/authors', newAuthor);
  
  }

  getAuthor(id: any) {
    console.log("hellooo3");
    return this._http.get(`/api/authors/${id}`);
  }
  
  editAuthor(id: any, author: any) { 
    return this._http.put(`/api/authors/edit/${id}`, author);

    
  }
 deleteAuthor (id: any) {
   return this._http.delete('/api/authors/'+id);
 }


  
}



