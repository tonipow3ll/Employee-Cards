const inquirer = require('inquirer');
const Employee = require('./employee');


class Manager extends Employee {
    // use a constructor instead of this.name = name; this.type = type;, etc. 
    constructor (name, id, email, office) {
        super(name, id, email)
        this.office = office;
        console.log("name = " + this.name)
    }

    
// call your getter
    getName(){
        return this.name;
    }
    getOffice(){
        return this.office;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getPosition(){
        return Manager.name;
    }

}
module.exports = Manager;





