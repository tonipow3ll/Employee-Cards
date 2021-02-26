const Engineer = require("../lib/engineer")

test("Can create a new engineer", () => {
    const e = new Engineer("Toni");
    expect(typeof (e)).toBe("object");
});

test("Can set name based on user input", () => {
    const name = "Toni"
    const e = new Engineer(name);
    expect(e.name).toBe(name);
});

test('can set employee ID', () => {
    const id = 1;
    const employee = new Engineer('', id, ''); 
    expect(employee.getId()).toBe(1);
});


test('can set employee email', () => {
    const email = 'tonipow3ll@gmail.com';
    const e = new Engineer('Toni', 1 , email)
    expect (e.email).toBe( email)
});

test('can set employee Github', () => {
    const github = 'tonipow3ll';
    const e = new Engineer('Toni', 7 , "tonipow3ll@gmail.com", github)
    expect (e.github).toBe(github);
});



