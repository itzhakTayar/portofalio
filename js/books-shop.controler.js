'use strict';
function onInit() {
  renderBooks();
}

function renderBooks() {
  const books = _createBooks();
  console.log(books);
  const strHtmls = books.map(function (book) {
    return `
        <tr>
        <td>${book.id}</td>
        <td>${book.title}</td>
        <td>${book.price}$</td>
        <td class="picture"><img src="${book.picture}"/></td>
        <td>${book.rating}</td>
        <td><button  class="read" onclick="onReadBook('${book.id}')">read</button></td>
        <td><button class="update" onclick="onUpdateBook('${book.id}')">update</button></td>
        <td><button class="delete" onclick="onDeleteBook('${book.id}')">delete</button></td>
        </tr>`;
  });
  console.log(strHtmls);
  document.querySelector('.books-shop').innerHTML = strHtmls.join('');
}
function onAddBook() {
  const title = prompt('title?');
  const price = prompt('price?');
  if (title && price) {
    const book = addBook(title, price);
    renderBooks();
    flashMsg(`book Added (id: ${book.id})`);
  }
}
function onDeleteBook(bookId) {
  deleteBook(bookId);
  renderBooks();
  flashMsg(`book Deleted`);
}
function onUpdateBook(bookId) {
  var newPrice = +prompt('price?');
  if (newPrice) {
    const book = updateBook(bookId, newPrice);
    renderBooks();
    flashMsg(`price updated to: ${book.price}`);
  }
}

// *******************************************
// to do on css

function onReadBook(bookId) {
  const book = getBookById(bookId);
  const elModal = document.querySelector('.modal');
  const HTMLtxt = `<button onclick="onRateBook('${bookId}')">rate the book</button>`;
  elModal.querySelector('h3').innerText = book.title;
  elModal.querySelector('.price').innerText = book.price;

  elModal.querySelector('p').innerText = book.desc;
  elModal.querySelector('.rate').innerText = book.rating;
  elModal.querySelector('.rate-btn').innerHTML = HTMLtxt;

  document.querySelector('.modal').classList.add('open');
}

function onCloseModal() {
  document.querySelector('.modal').classList.remove('open');
}
// ***********************************************

function flashMsg(msg) {
  const el = document.querySelector('.user-msg');
  el.innerText = msg;
  el.classList.add('open');
  setTimeout(() => {
    el.classList.remove('open');
  }, 2000);
}
function onRateBook(bookId) {
  const rating = document.querySelector('.modal .rate').innerText;

  rateBook(bookId, rating);
  renderBooks();
}
function onIncreaseRate() {
  document.querySelector('.rate').innerText++;
}
function onDecreaseRate() {
  document.querySelector('.rate').innerText--;
}
