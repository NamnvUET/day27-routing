import { Component, OnInit } from '@angular/core';
import { Author, authors } from '../author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  authors: Author[] = authors;
  constructor() { }

  ngOnInit(): void {
  }

  okDelete(author: Author){
    console.log(author);
    this.authors = this.authors.filter(item => item.id !== author.id);
  }
}
