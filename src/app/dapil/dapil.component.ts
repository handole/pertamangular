import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
// import { toPromise } from 'rxjs/add/operator/toPromise';
import 'rxjs/operator/toPromise';

@Component({
  selector: 'app-dapil',
  templateUrl: './dapil.component.html',
  styleUrls: ['./dapil.component.css']
})
export class DapilComponent implements OnInit {
  url : string = 'http://localhost:8000/api/kecamatan';
  constructor(private http : Http) { }
  public getKecamatan() {
    this.http.get(this.url).toPromise().then((res)=>{
      console.log(res.json());
    });
  }

  ngOnInit() {
  }

}
