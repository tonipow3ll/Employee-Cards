const Manager = require("../lib/manager")

test("Can create a new manager", () => {
    const e = new Manager("Toni");
    expect(typeof (e)).toBe("object");
});