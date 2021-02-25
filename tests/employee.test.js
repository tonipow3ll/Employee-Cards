const Employee = require("../lib/employee")

test("Can create a new employee", () => {
    const e = new Employee("Toni");
    expect(typeof (e)).toBe("object");
});

