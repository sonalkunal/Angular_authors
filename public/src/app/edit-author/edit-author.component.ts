import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  author:any;
 

  
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
   
    this._route.params.subscribe((params: Params) => {
      // console.log(params['id']);
      this.getAuthor(params['id']);
      //this.author = { _id:params['id'] };
      });
      // errorsObject: any;



     
  }

  getAuthor(id: any) {
    let obs = this._httpService.getAuthor(id);
    obs.subscribe(data => {
      console.log(data);
      this.author = data;
    })
  }

  editAuthor() {
    console.log("author ", this.author)
    let obs = this._httpService.editAuthor(this.author._id,this.author);
    obs.subscribe((data: any) => {
      if (data.errors){
        console.log(data.errors);
      } else {
        this._router.navigate(['/authors']);
      }
  })
  }
}