class Engineer {
    // use a constructor instead of this.name = name; this.type = type;, etc. 
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
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
}

