const Intern = require("../lib/Intern");
const intern = new Intern("Han", 470, "chewysboss@gmail.com", "Millennium Falcon");
test("checking to see if Intern name works.", () => {
  expect(intern.name).toBe("Fred");
});
test("checking to see if role works.", () => {
  expect(intern.id).toBe(470);
});
test("checking to see if email works.", () => {
  expect(intern.email).toBe("thefredguy@gmail.com");
});
test("Checking url works properly", () => {
  expect(intern.school).toBe("Millennium Falcon");
});