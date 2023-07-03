console.log('oop');

const book1 = {
    title: 'iliade',
    author: ['omero'],
    dop: '27/12/2009',
    publisher: 'einaudi'
}

const book2 = new Book('odissea', 'omero', '27/12/2010', 'einaudi');

console.log(book1);
console.log(book2);

console.log(book1.title);
console.log(book2.title);

console.log(book1['author']);
console.log(book2['author']);

function getBookCard(book) {
    const card = 'Titolo: ' + book.title + '\n' + 'Autore: ' + book.author + '\n' + 'Data di pubblicazione: ' + book.dop + '\n' + 'Casa editrice: ' + book.publisher + '\n';
    
    return card;
}
console.log(getBookCard(book1));

console.log(book2.getBookCard());
console.log(book3.getBookCard());