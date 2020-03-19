import React from 'react';
import { render } from 'react-dom';

import Library from './components/Library'

let bookList = [
    {title: "The Sun Also Rises", author: "Ernest Hemingway", pages: 260},
    {title: "White Teeth", author:"Zadie Smith", pages: 480},
    {title: "Cat's Cradle", author: "Kurt Vonnegut", pages: 304},
    {title: "Harry Potter and the Half-Blood Prince", author: "J.K. Rowling", pages: 607}
];

render(
  <Library books={bookList}/>,
  document.getElementById('root'));