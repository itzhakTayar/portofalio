'use strict';

const STORAGE_KEY = 'bookDB';
const gTitle = ['Hamlet', 'Ulysses', 'Don Quixote', ' The Odyssey'];
const gPicture = ['book1', 'book2', 'book3', 'book4'];
var gBooks;

function _createBooks() {
  var books = loadFromStorage(STORAGE_KEY);
  if (!books || !books.length) {
    books = [];
    for (let i = 0; i < 3; i++) {
      var title = gTitle[getRandomIntInclusive(0, gTitle.length - 1)];
      books.push(_createBook(title));
    }
  }
  gBooks = books;
  _saveBooksToStorage();
  return books;
}

function _createBook(title, price = getRandomIntInclusive(5, 100)) {
  return {
    id: makeId(),
    title: title,
    price: price,
    picture: getRandomPicture(),
    desc: makeLorem(),
    rating: 0,
  };
}

function addBook(title, price) {
  const book = _createBook(title, price);
  gBooks.unshift(book);
  _saveBooksToStorage();
  return book;
}
function deleteBook(bookId) {
  const bookIdx = gBooks.findIndex(function (book) {
    return bookId === book.id;
  });
  gBooks.splice(bookIdx, 1);
  _saveBooksToStorage();
}

function updateBook(bookId, bookPrice) {
  const book = getBookById(bookId);
  book.price = bookPrice;
  _saveBooksToStorage();
  return book;
}
function rateBook(bookId, rate) {
  const book = getBookById(bookId);
  book.rating = rate;
  _saveBooksToStorage();
  return book;
}
function getBookById(bookId) {
  const book = gBooks.find(function (book) {
    return bookId === book.id;
  });
  return book;
}

function getRandomPicture() {
  const randomIdx = getRandomIntInclusive(0, gPicture.length - 1);
  return `img/${gPicture[randomIdx]}.jfif`;
}
function _saveBooksToStorage() {
  saveToStorage(STORAGE_KEY, gBooks);
}
