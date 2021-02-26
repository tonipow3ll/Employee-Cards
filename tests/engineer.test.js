const Engineer = require("../lib/engineer")

test("Can create a new engineer", () => {
    const e = new Engineer("Toni");
    expect(typeof (e)).toBe("object");
});

test("Can set name based on user input", () => {
    const name = "Toni"
    const enName = new Engineer(name);
    expect(enName.getName()).toBe('Toni');
});

test('can set employee ID', () => {
    const id = 1;
    const employee = new Engineer('', id, ''); 
    expect(employee.getId()).toBe(1);
});


test('can set engineer email', () => {
    const email = 'tonipow3ll@gmail.com';
    const engineer = new Engineer("", "", email);
    expect(engineer.getEmail()).toBe('tonipow3ll@gmail.com');
})


test('can set employee Github', () => {
    const github = 'tonipow3ll';
    const engineer = new Engineer("", "", "", github);
    expect (engineer.getGithub()).toBe('tonipow3ll');
})



