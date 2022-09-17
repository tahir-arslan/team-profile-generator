const Engineer = require('../lib/Engineer');

test('create engineer class, then test its properties', () => {
    const engineer = new Engineer('Random Name5', 'RN05', 'random.email5@gmail.com', 'randomgithub1')

    expect(engineer.name).toBe('Random Name5');
    expect(engineer.id).toBe('RN05');
    expect(engineer.email).toBe('random.email5@gmail.com');
    expect(engineer.github).toBe('randomgithub1');
});

test('get role', () => {
    const engineer = new Engineer('Random Name5', 'RN05', 'random.email5@gmail.com', 'randomgithub2')

    expect(engineer.getRole()).toBe('Engineer');
});

test('get github', () => {
    const engineer = new Engineer('Random Name6', 'RN06', 'random.email6@gmail.com', 'randomgithub3')

    expect(engineer.getGithub()).toBe('randomgithub3')
});