import { Injectable } from '@angular/core';

@Injectable(//{ // can use the service from the service container
  //providedIn: 'root'
//}
)
export class BooksService {

  constructor() { }

  getBooks(){
    return [
      {
        name:'Clean Code',
        author:'Robert C Martin',
        image:'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
        amount:700
      },
      {
        name:"The Pragmatic Programmer",
        author:'Andrew Hunt,David Thomas',
        image:'https://m.media-amazon.com/images/I/41HXiIojloL._SX396_BO1,204,203,200_.jpg',
        amount:800
      }
    ]
  }
}


class Name{
  constructor(name:string){

  }
}