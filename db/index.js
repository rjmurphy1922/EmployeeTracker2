const connection = require("./connection");

module.exports = {
    addDepartment(data) {
        return connection.query("INSERT INTO DEPARTMENTS SET ?,", data );
    },

    addRole(data) {
        return connection.query("INSERT INTO ROLES SET ?,", data )
    },

    addEmployee(data) {
        return connection.query("INSERT INTO EMPLOYEE SET ?,", data )
    },

    viewDepartments() {
        return connection.query("SELECT * DEPARTMENTS")
    },

    viewEmployees() {
        return connection.query("SELECT * FROM EMPLOYEE")
    },

    UpdateEmployees() {
        return connection.query("UPDATE * EMPLOYEE SET ? WHERE ?")
    },

    UpdateRoles() {
        return connection.query("UPDATE * EMPLOYEE SET ? WHERE ?")
    },
    
}