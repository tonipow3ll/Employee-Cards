const Engineer = require("../lib/engineer")

test("Can create a new engineer", () => {
    const e = new Engineer("Toni");
    expect(typeof (e)).toBe("object");
});