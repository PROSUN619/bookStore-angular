import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

//use the service at global level
//or
//use this in the app module or share module to access globally
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  // getAllBooks(): BookModel[] {
  getAllBooks() {
    return [
      {
        id: 1,
        title: 'c#',
        totalPages: 380,
        author: 'Richard',
        price: {
          currency: 'INR',
          value: 280
        }
      },
      {
        id: 2,
        title: 'JAVA',
        totalPages: 385,
        author: 'James',
        price: {
          currency: 'INR',
          value: 290
        }
      },
      {
        id: 3,
        title: 'PHP',
        totalPages: 350,
        author: 'Harry',
        price: {
          currency: 'INR',
          value: 250
        }
      },
      {
        id: 4,
        title: 'Python',
        totalPages: 400,
        author: 'Nitish',
        price: {
          currency: 'INR',
          value: 380
        }
      },
      {
        id: 5,
        title: 'Node',
        totalPages: 382,
        author: 'Bill',
        price: {
          currency: 'INR',
          value: 312
        }
      }
    ]
  }
}
