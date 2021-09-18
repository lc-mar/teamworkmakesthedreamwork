
const Employee = require("../lib/Employee");
const employee = new Employee("Luke", "skywalker1@gmail.com", 715);

test("checking to see if Manager name works.", () => {
  expect(employee.name).toBe("Luke");
});
test("checking to see if name works.", () => {
  expect(employee.email).toBe("skywalker1@gmail.com");
});
test("checking to see if name works.", () => {
  expect(employee.id).toBe(715);
});