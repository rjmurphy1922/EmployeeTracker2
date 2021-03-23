const inquirer = require ("inquirer");
const db = require ("./db/index")
const connection = require ("./db/connection")
const mysql = require("mysql")

function nextSelection(){

    inquirer
    .prompt({
        type: "list",
        name:"selection",
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
        console.log(res)
        switch(res.selection)
          {
            case "Add Department":
            addDepartment();
            break;

            case "Add Role":
            addRole();
            break;

            case "Add Employee":
            addEmployees();
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


// roleSelection()


function addDepartment() {
    inquirer.prompt(
        {
            type: "input",
            name: "DEPARTMENT_NAME",
            message: "Please add Department Name?"
        },  
            ).then((res) => {
            db.addToDepartments(res);
            console.log("Department Added");
            nextSelection();
        });
 }

 function addRole(){



    db.getDepartment()
    .then((departments) => {
        const departmentChoices = departments.map((department) => ({
            value: department.id,
            name: department.department
        }))


            inquirer
                .prompt([
                    {

                        type: "input",
                        name: "TITLE",
                        message: "Please add role's Title",
                      
                    },
                    {
                        type: "input",
                        name: "SALARY",
                        message: "Please add Role's Salary",
                    
                    },
    
                    {
                        type: "list",
                        name: "DEPARTMENT_ID",
                        message: "Please add department this role is part of?",
                        choices: departmentChoices  
                    }
            ])
        .then((res) =>{
        const newRole= {
            title: res.TITLE,
            salary: res.SALRY,
            department_ID: results.DEPARTMENT_ID
        }

        db.addToRole(newRole);
        console.log("New Role Added");
        nextSelection()
            
    })}
        )}
nextSelection()