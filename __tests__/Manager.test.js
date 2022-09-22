const Manager = require('../lib/Manager');

test('create manager class, then test its properties', () => {
    const manager = new Manager('Random Name11', 'RN11', 'random.email11@gmail.com', 'randomnumber1')

    expect(manager.name).toBe('Random Name11');
    expect(manager.id).toBe('RN11');
    expect(manager.email).toBe('random.email11@gmail.com');
    expect(manager.officeNumber).toBe('randomnumber1');
});

test('get role', () => {
    const manager = new Manager('Random Name12', 'RN12', 'random.email12@gmail.com', 'randomnumber2')

    expect(manager.getRole()).toBe('Manager');
});