``` javascript 
{
  managers: [ 
      Manager { name: 'TP',
   id: '123', 
   email: '111', 
   office: '1' } ],

  engineers: [
    Engineer { name: 'Bobby', 
    id: '123',
    email: '', 
    github: 'ldsjfk' },
    Engineer {
      name: 'sdklfskldjf',
      id: '',
      email: 'dfjksld',
      github: ''
    }
  ],

  interns: 
  [ Intern { name: 'Bonnie', 
        id: '', 
        email: '', 
         school: 'UNH' } ]

}
```


// function createTeam(typeEmployee) {
//   // console.log(typeEmployee, "yo yo yo")
//   switch(typeEmployee){
//     case "Engineer":
//         makeEngineer();
//         break;
//     case "Intern":
//         makeIntern();
//         break;
//         case "Thats everyone!":
//         makeHTML();
//         break;
//   }
// }



// function makeManager(){
//   let managerFile = fs.readFileSync('./dist/manager.html', 'utf8');
//   managerFile = managerFile.replace('{{name}}', theTeam.managername);
// }

// function makeEngineer(){
//   let engineerFile = fs.readFileSync('./dist/engineer.html', 'utf8');
//   engineerFile = engineerFile .replace('{{engineername}}', Employee.engineername);
// }


// function makeIntern(){
//   let internFile = fs.readFileSync('./dist/intern.html' ,'utf8');
//   internFile = internFile .replace('{{internname}}', Employee.internname);
// }