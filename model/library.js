class Library {
    constructor(publications = []) {
        this.publications = publications;
    }

    addPublication(pub) {
        this.publications.push(pub);
    }
}