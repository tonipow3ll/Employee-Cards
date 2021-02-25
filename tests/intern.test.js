const Intern = require("../lib/intern")

test("Can create a new intern", () => {
    const e = new Intern("Toni");
    expect(typeof (e)).toBe("object");
});