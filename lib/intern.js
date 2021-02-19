class Intern {
    // use a constructor instead of this.name = name; this.type = type;, etc. 
    constructor (name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
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
    getSchool(){
        return this.school;
    }
}



// exporting employee class
module.exports = Intern;