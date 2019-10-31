import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css']
})
export class AllAuthorsComponent implements OnInit {
  allAuthors: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllAuthors();
  }
  getAllAuthors(){
    let obs = this._httpService.getAllAuthors();
    obs.subscribe(data => {
      console.log(data);
      console.log("helllooo");
      this.allAuthors = data;
    })
  }

  deleteAuthor(id) {
    let obs = this._httpService.deleteAuthor(id);
    obs.subscribe(data => {
    this.getAllAuthors();
    })
  }

}
