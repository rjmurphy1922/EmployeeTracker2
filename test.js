const inquirer = require ("inquirer");
// const db = require ("./db/connection")
const connection = require ("./db/connection")
const mysql = require("mysql")

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

function addDepartment(){

    inquirer
    .prompt(

        {
        message: "Please add EMPLOYEE Name",
        type: "input",
        name: "Name"


        },
    )

    .then((results) => {
        connection.query ("INSERT INTO DEPARTMENTS SET ?", 
    {
        DEPARTMENT_NAME: results.Name,

    },
        function (err, data){
            connection.query("SELECT * FROM DEPARTMENTS", function(err, data){
                if (err) throw err;
                console.table(data)
            })
        }
     )
 });


    function addRole(){

        inquirer
        .prompt(

            {
                message: "Please add Role_ID",
                type: "input",
                name: "Role_ID"
        
        
                },
    
            {
            message: "Please add Employees Title",
            type: "input",
            name: "Title"
    
    
            },

            {
                message: "Please Add Employees Salary",
                type: "input",
                name: "Salary"
        
        
                },

                {
                    message: "Please Add Employees Department_ID",
                    type: "input",
                    name: "Department_ID"
            
            
                    },

     
        )
    
        .then((results) => {
            connection.query ("INSERT INTO ROLES SET ?", 
        {
            DEPARTMENT_NAME: results.Name,
    
        },
            function (err, data){
                connection.query("SELECT * FROM ROLES", function(err, data){
                    if (err) throw err;
                    console.table(data)
                })
            }
             )
             });

             addRole()
    }

}


        
//  function addEmployees()

//     db.getRoles()
//     .then((roles)=>{

//         const roleChoice = roles.map((role)=>({

//             value: role.id,
//             name: role.title
//         }))})

//         db.getEmployee()
//         .then((manager) => {
//             const managerChoice = manager.map((manager) =>({
//                 value: manager.id,
//                 // name: role.title
//             })
//             )})})})})}
