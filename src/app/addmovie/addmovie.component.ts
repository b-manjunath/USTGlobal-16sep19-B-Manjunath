import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddMovieComponent implements OnInit {
  form = new FormGroup({
    name : new FormControl( '', [Validators.required]),
    url : new FormControl( '', [Validators.required]),
    desc : new FormControl( '', [Validators.required])
  });
  get name() {
    return this.form.get('name');
  }
  get url() {
    return this.form.get('url');
  }
  get desc() {
    return this.form.get('desc');
  }
  data(form: NgForm) {
    console.log(form.value);
  }
  constructor() { }

  ngOnInit() {
  }

}





