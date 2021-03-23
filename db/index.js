const sql = require ("sql-template-strings")
const connection = require("./connection");

module.exports = {
   
   
    getDepartment(res) {
        return connection.query(
            "SELECT * FROM DEPARTMENTS", res
        )
    },
   
    getRoles(res) {
        return connection.query(sql
            // "SELECT * FROM ROLES WHERE DEPARTMENT_ID = ?", res
            `SELECT ROLES.ROLE_ID, ROLES.TITLE, ROLES.SALARY, 
            DEPARTMENTS.DEPARTMENT_NAME AS DEPARTMENTS FROM ROLES
            LEFT JOIN DEPARTMENTS ON 
            ROLES.DEPARTMENT_ID=DEPARTMENTS.DEPARTMENT_ID`);
        
    },
    

    getEmployees(res) {
        return connection.query(sql
            // `SELECT e.EMPLOYEE_ID, e.FIRST_NAME, e.LAST_NAME, r.TITLE as TITLE FROM EMPLOYEE e INNER JOIN ROLES r ON e.ROLE_ID = r.ROLE_ID`, res
            `SELECT EMPLOYEE.EMPLOYEE_ID, EMPLOYEE.FIRST_NAME, EMPLOYEE.LAST_NAME, 
             ROLES.TITLE, ROLES.SALARY, 
             DEPARTMENTS.DEPARTMENT_NAME AS DEPARTMENTS, 
             CONCAT(manager.FIRST_NAME, ' ', manager.LAST_NAME) as manager FROM EMPLOYEE
             LEFT JOIN ROLES ON EMPLOYEE.ROLE_ID=ROLES.ROLE_ID 
             LEFT JOIN DEPARTMENTS ON roles.DEPARTMENT_ID=DEPARTMENTS.DEPARTMENT_ID 
             LEFT JOIN employee manager ON employee.MANAGER_ID=manager.MANAGER_ID;`);
        
    },
   

    addToDepartments(res){

     return connection.query(

      "INSERT INTO DEPARTMENTS SET ?", res
        );
    },


        addToRole(res) {
            return connection.query(
                "INSERT INTO ROLES SET ?", res
            );
        },


        addToEmployee(res) {
            return connection.query(
                "INSERT INTO EMPLOYEE SET ?", res
            );
    },












}