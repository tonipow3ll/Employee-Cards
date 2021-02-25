const Manager = require("../lib/manager")

test("Can create a new manager", () => {
    const e = new Manager("Toni");
    expect(typeof (e)).toBe("object");
});

test("Can set name based on user input", () => {
    const name = "Toni"
    const e = new Manager(name);
    expect(e.name).toBe(name);
});


test('can set employee email', () => {
    const email = 'tonipow3ll@gmail.com';
    const e = new Manager('Toni', 1 , email)
    expect (e.email).toBe(email)
});

test('can set office number', () => {
    const office = 1;
    const e = new Manager('Toni', 1 , "tonipow3ll@gmail.com", office)
    expect (e.office).toBe(office)
});

    
// test("Can set Manager ID based on user input", () => {
//     const ID = "7"
//     const e = new Manager(ID);
//     expect(e.ID).toBe(ID);
// });

// test("Can set Manager Office Number based on user input", () => {
//     const office = "10"
//     const e = new Manager(office);
//     expect(e.office).toBe(office);
// });