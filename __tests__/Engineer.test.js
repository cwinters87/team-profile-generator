const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')

test('creates an Engineer object', () => {
    const engineer = new Engineer('Scott', '1', 'scott@gmail.com', 'scotthub')
  
    expect(engineer.name).toBe('Scott')
    expect(engineer.id).toEqual(expect.any(String))
    expect(engineer.email).toEqual(expect.any(String))
    
    expect(engineer.github).toEqual(expect.any(String))
  
    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name))
    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id))
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email))
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'))

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github))

  })