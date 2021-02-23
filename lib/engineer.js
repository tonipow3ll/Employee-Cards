const Employee = require("./employee")

class Engineer extends Employee {
    // use a constructor instead of this.name = name; this.type = type;, etc. 
    constructor (name, id, email, github) {
        super(name, id, email)
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        console.log("name = " + this.name)
    }
// call your getters
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }
    getGithub(){
        return this.github;
    }
    getPositon(){
        return Engineer.name;
    }
    
}

module.exports = Engineer;
// inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'github',
//             message: 'Please enter engineers Github user name'
//         }
//     ])

