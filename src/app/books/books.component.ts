import { Component,OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';
import { BookComponent } from './book/book.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  books:Book[]=[]; 
  constructor(private booksService:BooksService){ // dependency injection
    //console.log({constructor:'constructor'});
    //const name=new Name('someone');
    //this.booksService=new BooksService();
  }
  

  
  
  
  isDisabled:boolean=false; 
  
  
  
  
  ngOnInit(): void {
      //console.log({onInit:'OnInit'});
      this.books=this.booksService.getBooks();
  }

  handleClick(){
    alert('I am working');
  }

  // Two way binding
  myName:string='';
  /*handleInput(event:any){
    //console.log(event.target.value);
    this.myName=event.target.value;
  }*/

  // ngIf
  isShowing:boolean=true;
  /*toggleBooks(){
    this.isShowing=!this.isShowing;
  }*/

  card:Book[]=[];

  /*addToCart(event:Book){
    console.log('Received the event');
    console.log(event);
    
  }*/
}

