const Intern = require("../lib/intern")

test("Can create a new intern", () => {
    const e = new Intern("Toni");
    expect(typeof (e)).toBe("object");
});

test("Can set name based on user input", () => {
    const name = "Toni"
    const e = new Intern(name);
    expect(e.name).toBe(name);
});

test('can set employee email', () => {
    const email = 'tonipow3ll@gmail.com';
    const e = new Intern('Toni', 1 , email)
    expect (e.email).toBe(email)
});

test('can set Intern ID', () => {
    const id = 1;
    const employee = new Intern('', id, ''); 
    expect(employee.getId()).toBe(1);
});

test('can set interns School', () => {
    const school = 'tonipow3ll@gmail.com';
    const e = new Intern('Toni', 7 , 'tonipow3ll@gmail.com', school)
    expect (e.school).toBe(school)
 });
