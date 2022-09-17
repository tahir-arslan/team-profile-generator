const Employee = require('../lib/Employee');

test('create employee class', () => {
    const testEmployee = new Employee('Random Name1', 'RN01', 'random.email1@gmail.com');

    expect(testEmployee.name).toBe('Random Name1');
    expect(testEmployee.id).toBe('RN01');
    expect(testEmployee.email).toBe('random.email1@gmail.com');
})

test('get employee name', () => {
    const testEmployee = new Employee('Random Name2', 'RN02', 'random.email2@gmail.com');

    expect(testEmployee.getName()).toBe('Random Name2');
})

test('get employee id', () => {
    const testEmployee = new Employee('Random Name3', 'RN03', 'random.email3@gmail.com')

    expect(testEmployee.getId()).toBe('RN03')
})

test('get employee email', () => {
    const testEmployee = new Employee('Random Name4', 'RN04', 'random.email4@gmail.com');

    expect(testEmployee.getEmail()).toBe('random.email4@gmail.com')
})