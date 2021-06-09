import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  public user = {
    name: 'Nam Nguyen Van',
    age: 25,
  };

  showInfo() {
    alert('Inside Angular component method. Test Event Binding');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
