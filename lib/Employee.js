class Employee {
    constructor(name, id, email) {
       this.name = name
       this.id = id
       this.email = email
    }

    getName() {
        return `Employee's name is ${this.name}.`
    }

    getId() {
        return `Employee's ID is ${this.id}.`
    }

    getEmail() {
        return `Employee's email is ${this.email}.`
    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee