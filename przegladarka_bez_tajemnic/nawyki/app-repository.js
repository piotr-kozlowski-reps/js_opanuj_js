class AppRepository{

    constructor(){
        
        if(AppRepository.instance == null){
            this.storage = new AppStorage();
            this.nawykName = this.storage.get('NAWYK_NAME') || '';
            this.nawykRepo = this.storage.get('NAWYKREPO') || [];
        }
        
        AppRepository.instance = this;
        return AppRepository.instance;

        // this.storage = storage;
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

    readNawyksNumbersOfGivenDate(dateString){

    }










    addNawykInfo(nawyk){
        // debugger;
        this.nawykRepo.push(nawyk);
        this.storage.set('NAWYKREPO', this.nawykRepo)
        console.log(this.nawykRepo);
    }

    removeNawykInfo(id){
        this.nawykRepo = this.nawykRepo.filter(nawyk => nawyk.id !== id);
    }

    updateNawykInfo(id, nawykState){
        const nawyk = this.nawykRepo.find(n => n.id === id);
        // nawyk.
    }


}

const repository = new AppRepository();
Object.freeze(repository);
export default repository;