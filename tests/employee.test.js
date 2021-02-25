const Employee = require("../lib/employee")

test("Can create a new employee", () => {
    const e = new Employee("Toni");
    expect(typeof (e)).toBe("object");
});


test("Can set name based on user input", () => {
    const name = "Toni"
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test('can set employee email', () => {
    const email = 'tonipow3ll@gmail.com';
    const e = new Employee('Toni', 7 , email)
    expect (e.email).toBe(email)
});




