class Manager {
    // use a constructor instead of this.name = name; this.type = type;, etc. 
    constructor (name, id, email, office) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
        console.log("name = " + this.name)
    }

    
// call your getter
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getOffice(){
        return this.office;
    }
}

