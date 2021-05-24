const Employee = require("../lib/Employee")

test('creates an employee object', () => {
    const employee = new Employee('Dave', '1', 'dave@gmail.com')
  
    expect(employee.name).toBe('Dave')
    expect(employee.id).toEqual(expect.any(String))
    expect(employee.email).toEqual(expect.any(String))
  
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name))
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id))
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email))
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'))

  })