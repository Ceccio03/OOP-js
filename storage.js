class Storage {
    constructor() {

    }

    saveData(data) {
        const dataString = JSON.stringify(data);
        
        console.log(dataString);
    }
}