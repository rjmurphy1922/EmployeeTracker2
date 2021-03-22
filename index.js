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
//     function addDepartment() {
//         // console.log("Adding a Department");
//         inquirer
//             .prompt(
//                 {
//                     message: "what Department do you want to add?",
//                     type: "input",
//                     name: "Name",
                  
//                 }
//             )
//             .then((response) => {
//                 db.addDepartment(response.Name);
    
//                 console.log("-----------------------------------------");
//                 startingPromt();
//             })
//     }

// }
roleSelection()


function addDepartment() {
    inquirer.prompt([
        {
          name: "deptName",
          type: "input",
          message: "What is the name of the department you want to add to the directory?"
        }  
    ]).then(function(answer) {
        connection.query(
            "INSERT INTO department SET ?",
            {
                dept_name: answer.deptName
            },
            function(err) {
                if (err) throw err;
                console.log("The department has been added.");
                start();
            }
        );
    });

};

function addRole() {
    inquirer.prompt([
        {
          name: "addingRole",
          type: "input",
          message: "What employee role would you like to add to the database?"
        },
        {
            name: "salary",
            type: "input",
            message: "What is the salary?"
        }  
    ]).then(function(answer) {
        connection.query(
            "INSERT INTO role SET ? ?",
            {
                title: answer.addingRole,
                salary: answer.salary
            },
            function(err) {
                if (err) throw err;
                console.log("That role has been added to the database.");
                start();
            }
        );
    });

};

function addEmployee() {
    inquirer.prompt([
        {
          name: "firstName",
          type: "input",
          message: "What is your new employee's first name?"
        },
        {
          name: "lastName",
          type: "input",
          message: "What is their last name?"
        },
        {
          name: "employeeRole",
          type: "input",
          message: "What is their role within the company?"
        },
        //if else statements for connecting to correct id
        {
          name: "employeeManager",
          type: "input",
          message: "Who is their manager?"
        }
        //if else statements for connecting to correct id
    ]).then(function(answer) {
        connection.query(
            "INSERT INTO department SET ?",
            {
                first_name: answer.firstName,
                last_name: answer.lastName,
                role_id: answer.employeeRole,
                manager_id: answer.employeeManager
            },
            function(err) {
                if (err) throw err;
                console.log("Your new employee has been added to the database!");
                start();
            }
        );
    });

};

function viewDepartment() {

};

// function viewRole() {

// };

function viewEmployee() {

};

function updateEmployee() {
    inquirer.prompt([
        {
          name: "",
          type: "input",
          message: "?"
        },
        {
            name: "",
            type: "",
            message: ""
        }  
    ]).then(function(answer) {
        connection.query(
            "INSERT INTO role SET ? ?",
            {
                title: answer.addingRole,
                salary: answer.salary
            },
            function(err) {
                if (err) throw err;
                console.log("That role has been added to the database.");
                start();
            }
        );
    
        })}}    