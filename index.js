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
        // res.action
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


roleSelection()


function addDepartment() {
    inquirer.prompt(
        {
          name: "deptName",
          type: "input",
          message: "Please add Department Name?"
        },  
            ).then((res) => {
            db.insertDepartment(res);
            console.log("Department Added");
            nextSelection();
        });
 }}

 function addRole(){

    db.getDepartment()
    .then((departments)) => {


    }
 }

 function addEmployee()

    db.getRole()
    .then((roles)=>{

        const roleChoice = roles.map((role)=>({

            value: role.id,
            name: role.title
        }))})

        db.getEmployee()
        .then((manager) => {
            const managerChoice = manager.map((manager) =>({
                value: manager.id,
                // name: role.title
            })
            )})