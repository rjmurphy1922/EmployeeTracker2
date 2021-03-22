const sql = require ("sql-template-strings")
const connection = require("./connection");

module.exports = {
   
   
    getDepartment(res) {
        return connection.query(
            "SELECT * DEPARTMENT", res
        )
    },
   
    getRoles(res) {
        return connection.query(
            "SELECT * FROM ROLES WHERE DEPARTMENT_ID = ?", res
        )
    },
   

    getEmployees(res) {
        return connection.query(
            //JOIN??
            "SELECT e.ID, e.FIRST_NAME, e.LAST_NAME, r.TITLE as TITLE FROM EMPLOYEE e INNER JOIN ROLES r ON e.ROLE_ID =r.ROLE_ID ", res
        )
    },
   

    addToDepartments(res){

     return connection.query(

      "INSERT INTO DEPARTMENT SET ?,", res
        );
    },

    addToRole(res){

        return connection.query(
   
         "INSERT INTO ROLES SET ?,", res
           );
        },


    addToEmployee(res) {
        return connection.query(
            "INSERT INTO EMPLOYEE SET ?", res
        )
    },
    










}