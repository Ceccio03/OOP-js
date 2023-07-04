class Library {
    constructor(publications = []) {
        this.publications = publications;
    }

    addPublication(pub) {
        this.publications.push(pub);
    }

    deletePublication(index) {
        // this.publications = this.publications.filter((_, i) => i !== index);
        this.publications.splice(index, 1);
    }
}