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
            "View Role",
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

            // case "Add Salary":
            // addSalary();
            // break;

            case "View Departments":
            viewDepartment();
            break;

            case "View Employee":
            viewEmployee();
            break;

            case "View Role":
            viewRoles();
            break;

            // case "Update Employee":
            // updateEmployee();
            // break;

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
        const deptChoices = departments.map((department) => ({
            value: department.DEPARTMENT_ID,
            name: department.DEPARTMENT_NAME 
        }))


            inquirer
                .prompt([

                    {

                        type: "input",
                        name: "ROLE_ID",
                        message: "Please add role's ID",
                      
                    },
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
                        choices: deptChoices  
                    }
            ])
        .then((res) =>{
        const newRole= {
            role_id: res.ROLE_ID,
            title: res.TITLE,
            salary: res.SALARY,
            department_ID: res.DEPARTMENT_ID
        }

        db.addToRole(newRole);
        console.log("New Role Added");
        nextSelection()
            
    })}
        )}

        function addEmployees() {

            db.getRoles()
                .then((roles) => {
        
                    const roleChoice = roles.map((role) => ({
                        value: role.ROLE_ID,
                        name: role.TITLE,
                    }));
        
     
        
                inquirer
                    .prompt([
                        {

                            type: "input",
                            name: "FIRST_NAME",
                            message: "Please Enter Employee's First Name?",

                        },
                        {

                            type: "input",
                            name: "LAST_NAME",
                            message: "Please Enter Employee's Last Name?"

                        },
                        {

                            type: "list",
                            name: "ROLE_ID",
                            message: "Please Enter Employee's Role?",
                            choices: roleChoice 

                        },
            
                    ]).then((results) => {
                        const newEmployee = {

                            first_name: results.FIRST_NAME,
                            last_name: results.LAST_NAME,
                            role_id: results.ROLE_ID,
        

                        }

                        db.addToEmployee(newEmployee);
                        console.log("Employee Added");
                            nextSelection();
            
                        });
                    
                    })
                
                }

            function viewDepartment() {
                 db.getDepartment()
                .then((department) => {
                console.table(department);
                nextSelection();
                })
        
        }

     
            function viewEmployee(){
                 db.getEmployees()
                .then((employee) =>{
                console.table(employee)
                nextSelection()
                })

      
                
            }

            function viewRoles(){
                  db.getRoles()
                 .then((role) =>{
                 console.table(role)
                 nextSelection()
                        })
        
              
                        
                    }


                    function updateRole() {

                        db
                            .getRoles()
                            .then((roles) => {
                    
                                const roleChoice = roles.map((role) => ({
                                    value: role.ROLE_ID,
                                    name: role.TITLE,
                                }));
                    
                            db
                                .getEmployees()
                                .then((employees) => {
                    
                                    const employeeChoice = employees.map((employee) => ({
                                        value: employee.id,
                                        name: employee.first_name + " " + employee.last_name
                                    }));
                    
                            inquirer
                                .prompt([
                                    {
                                        type: "list",
                                        name: "EMPLOYEE_ID",
                                        message: "Please Select Employee to Update?",
                                        choices: employeeChoice
                                    },
                                    {
                                        type: "list",
                                        name: "role_id",
                                        message: "Please Add Employee's New Role",
                                        choices: roleChoice
                                    }
                                ]).then((results) => {
                    
                                    db.updateEmployeeRole(results);
                                    console.log("Succesfully Updated Role.")
                                    askForAction();
                                });
                            
                            });
                            
                        });
                    }



nextSelection()