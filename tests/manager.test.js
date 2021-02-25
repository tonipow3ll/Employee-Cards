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