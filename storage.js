class Storage {
    constructor() {

    }

    saveData(data) {
        const dataString = JSON.stringify(data);

        localStorage.setItem('publications', dataString)
    }
}