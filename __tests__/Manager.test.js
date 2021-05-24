const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')

test('creates a Manager object', () => {
    const manager = new Manager('Luke', '72', 'luke@gmail.com', '512-951-4565')
  
    expect(manager.name).toBe('Luke')
    expect(manager.id).toEqual(expect.any(String))
    expect(manager.email).toEqual(expect.any(String))

    expect(manager.officeNumber).toEqual(expect.any(String))
  
    expect(manager.getName()).toEqual(expect.stringContaining(manager.name))
    expect(manager.getId()).toEqual(expect.stringContaining(manager.id))
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email))
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'))
  })