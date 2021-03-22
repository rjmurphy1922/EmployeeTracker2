const inquirer = require ("inquirer");
const db = require ("./db/index")
// const connection = require ("./db/connection")
// const mysql = require("mysql")

function roleSelection(){

    inquirer
    .prompt({
        type: "list",
        name:"github",
        message: "Please make a selection from the options below",
        choices:[
            "Add Department",
            "Add Role",
            "Add Employee",
            "Add Salary",
            "View Departments",
            "View Roles",
            "View Employee",
            "Update Employee",
            "Update Role"
            
        ]
    
    })

    .then((res) => {

        switch(res) {
            case "Add Department":
            addDepartment();
            break;

            case "Add Role":
            addRole();
            break;

            case "Add Employee":
            addEmployee();
            break;

            case "Add Salary":
            addSalary();
            break;

            case "View Departments":
            viewDepartment();
            break;

            case "View Employee":
            viewEmployee();
            break;

            case "Update Employee":
            updateEmployee();
            break;

            case "Update Role":
            updateRole();
            break;

        }
    });




};

function roleSelection(){

    inquirer
    .prompt({
        type: "list",
        name:"github",
        message: "Please make a selection from the options below",
        choices:[
            "Add Department",
            "Add Role",
            "Add Employee",
            "Add Salary",
            "View Departments",
            "View Roles",
            "View Employee",
            "Update Employee",
            "Update Role"
            
        ]
    
    })

    .then((data) => {

        switch(data ) {
            case "Add Department":
            addDepartment();
            break;

            case "Add Role":
            addRole();
            break;

            case "Add Employee":
            addEmployee();
            break;

            case "Add Salary":
            addSalary();
            break;

            case "View Departments":
            viewDepartment();
            break;

            case "View Employee":
            viewEmployee();
            break;

            case "Update Employee":
            updateEmployee();
            break;

            case "Update Role":
            updateRole();
            break;

        }
    });
    function addDepartment() {
        // console.log("Adding a Department");
        inquirer
            .prompt(
                {
                    message: "what Department do you want to add?",
                    type: "input",
                    name: "Name",
                  
                }
            )
            .then((response) => {
                db.addDepartment(response.Name);
    
                console.log("-----------------------------------------");
                startingPromt();
            })
    }

}
addDepartment()