const Intern = require('../lib/Intern');

test('create intern class, then test its properties', () => {
    const intern = new Intern('Random Name7', 'RN07', 'random.email7@gmail.com', 'randomschool1')

    expect(intern.name).toBe('Random Name7');
    expect(intern.id).toBe('RN07');
    expect(intern.email).toBe('random.email7@gmail.com');
    expect(intern.school).toBe('randomschool1');
});

test('get role', () => {
    const intern = new Intern('Random Name8', 'RN09', 'random.email9@gmail.com', 'randomschool2')

    expect(intern.getRole()).toBe('Intern');
});

test('get school', () => {
    const intern = new Intern('Random Name10', 'RN10', 'random.email10@gmail.com', 'randomschool3')

    expect(intern.getSchool()).toBe('randomschool3')
});