import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor(private http:HttpClient) {}

  fetchAllGroceries(){
    return this.http.get("https://raw.githubusercontent.com/piyalidas10/NGRX-Angular/refs/heads/main/groceries.json");
  }
}
