import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrls: ['./test-checkbox.component.scss']
})
export class TestCheckboxComponent {

  checkbox: []

  constructor(private http : HttpClient, private router: Router) { }

  login() {
    this.http.get<any>("http://localhost:3000/input")
      .subscribe(res => {
        this.checkbox = res.id
      }, err => {
        console.log(err)
      })
  }
}
