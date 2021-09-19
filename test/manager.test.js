const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Han Solo', 11, 'landosucks@gmail.com', 77);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Han Solo', 11, 'landosucks@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 