class AppRepository{

    constructor(storage){
        this.nawykName = '';
        this.nawykRepo = [];
        this.storage = storage;
    }

    addName(name){
        this.nawykName = name;
        this.storage.set('NAWYK_NAME', this.nawykName);
    }

    getName(){
        return this.nawykName;
    }

    clearName(){
        this.nawykName = '';
        this.storage.set('NAWYK_NAME', '');
    }

    addNawykInfo(nawyk){
        this.nawykRepo.push(nawyk);
        this.storage.set('NAWYKREPO', this.nawykRepo)
    }

    removeNawykInfo(id){
        this.nawykRepo = this.nawykRepo.filter(nawyk => nawyk.id !== id);
    }

    updateNawykInfo(id, nawykState){
        const nawyk = this.nawykRepo.find(n => n.id === id);
        // nawyk.
    }


}