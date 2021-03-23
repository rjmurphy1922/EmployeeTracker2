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

    // db.getDepartment()
    // .then((departments) => {

        db.getDepartment()
        .then((departments) => {
            const deptChoice = departments.map((department) => ({

                value: department.id,
                name:department.departments
            }))


            inquirer
                .prompt([
                    {

                        type: "input",
                        name: "title",
                        message: "What is the role's title?",
                      
                    },
                    {
                        type: "input",
                        name: "salary",
                        message: "What is the role's salary?",
                    
                    },
    
                    {
                        type: "list",
                        name: "department_id",
                        message: "What department is this role for?",
                        choices: deptChoices  
                    }
            ])
        .then((res) =>{
        const newRole= {
            title: res.title,
            salary: res.salary,
            department_ID: results.department_id
        }

        db.addToRole(newRole);
        console.log("New Role Added");
        nextSelection()
            
    })}
        )}
nextSelection()