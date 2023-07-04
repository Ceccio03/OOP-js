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

    getAllBookCards() {
        let allCards = '';

        for (let i = 0; i < this.publications; i++) {
            const pub = this.publications[i];
            const humanIndex = i + 1;

            allCards += humanIndex + ') ' + pub.toString();
            allCards += '----------------------\n';
            
        }
        return allCards;
    }
}