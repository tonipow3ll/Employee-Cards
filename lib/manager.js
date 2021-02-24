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

    // getPosition(){
    //     return Manager.answers.name;
    // }
  
//     getOffice(){
//        return inquirer
//    .prompt([
//             {
//                 type: 'input',
//                 name: 'github',
//                 message: 'Please enter Managers office #'
//             }
//         ])
//         return this.office;
//     }

}
module.exports = Manager;





