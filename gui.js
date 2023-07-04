class GUI {
    constructor() {
        this.library = new Library();
    }

    start() {
        while (true) {
            const firstChoice = prompt('Hai 4 opzioni:\n 1) Guarda la lista dei libri\n 2) Aggiungi un libro\n 3) Rimuovi un libro\n 4) Esci dal programma\n Inserisci il numero dell\'operazione');

            if (firstChoice === '1') {
                this.showBooks();
            } else if (firstChoice === '2') {
                this.insertBook();
            } else if (firstChoice === '3') {
                
            } else if (firstChoice === '4') {
                break;
            } else {
                alert('Hai sbagliato ad inserire l\'opzione');
            }
        }
    }

    insertBook() {
        const title = prompt('Inserisci il titolo');
        const author = prompt('Inseriesci l\'autore');
        const dop = prompt('Inseriesci la data di pubblicazione nel formato gg/mm/aaaa');
        const publisher = prompt('Inseriesci la casa editrice');

        const book = new Book(title, author, dop, publisher);
        this.library.addPublication(book);
    }

    showBooks() {
        const allBooks = this.library.getAllBookCards();

        console.log(allBooks);
    }
}