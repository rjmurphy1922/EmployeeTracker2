const sql = require ("sql-template-strings")
const connection = require("./connection");

module.exports = {
   
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