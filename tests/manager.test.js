const Manager = require("../lib/manager")

test("Can create a new manager", () => {
    const e = new Manager("Toni");
    expect(typeof (e)).toBe("object");
});

test("Can set name based on user input", () => {
    const name = "Toni"
    const manName = new Manager(name);
    expect(manName.getName()).toBe('Toni');
});


test('can set Manager email', () => {
    const email = 'tonipow3ll@gmail.com';
    const manager = new Manager("", "", email);
    expect(manager.getEmail()).toBe('tonipow3ll@gmail.com');
})

test('can set Manager ID', () => {
    const id = 1;
    const employee = new Manager('', id, ''); 
    expect(employee.getId()).toBe(1);
});

test('can set office number', () => {
    const office = 1;
    const officenum = new Manager('Toni', 1 , "tonipow3ll@gmail.com", office)
    expect (officenum.getOffice()).toBe(1)
});

    