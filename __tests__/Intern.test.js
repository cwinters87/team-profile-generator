const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern')

test('creates an Intern object', () => {
    const intern = new Intern('Mike', '49', 'mike@gmail.com', 'Yale')
  
    expect(intern.name).toBe('Mike')
    expect(intern.id).toEqual(expect.any(String))
    expect(intern.email).toEqual(expect.any(String))

    expect(intern.school).toEqual(expect.any(String))
  
    expect(intern.getName()).toEqual(expect.stringContaining(intern.name))
    expect(intern.getId()).toEqual(expect.stringContaining(intern.id))
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email))
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'))

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school))

  })