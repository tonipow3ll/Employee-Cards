const Employee = require("../lib/employee")

test("Can create a new employee", () => {
    const e = new Employee("Toni");
    expect(typeof (e)).toBe("object");
});


test("Can set name based on user input", () => {
    const name = "Toni"
    const empName = new Employee(name);
    expect(empName.getName()).toBe('Toni');
});

test('can set employee ID', () => {
    const id = 1;
    const employeeid = new Employee('', id, ''); 
    expect(employeeid.getId()).toBe(1);
});

test('can set employee email', () => {
    const email = 'tonipow3ll@gmail.com';
    const e = new Employee('Toni', 7 , email)
    expect (e.email).toBe(email)
});

test('can set employee email', () => {
    const email = 'tonipow3ll@gmail.com';
    const employee = new Employee("", "", email);
    expect(employee.getEmail()).toBe('tonipow3ll@gmail.com');
})



