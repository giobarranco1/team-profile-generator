function generateHTML(employeesArray){
   
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
    <div class="container m-2">
    <h1 class="text-white bg-primary m-3">My Team</h1>
        <!--Looping through all items in an array -->
        ${employeesArray.map(employee =>{
            console.log("Each Array Item" , employee); 
            if(employee.getRole() === "Manager"){
                return `<div class="card">
                <h1>${employee.name}</h1>
                <h2>Manager</h2>
                <p>Email: ${employee.email}</p>
                <p>OfficeNumber: ${employee.officeNumber}</p>
                </div>
                <br />`
            }
            else if(employee.getRole() === "Engineer"){
                return `<div class="card">
                <h1>${employee.name}</h1>
                <h2>Engineer</h2>
                <p>Email: ${employee.email}</p>
                <p>Github Username: http://github.com/${employee.getGithub()}</p>
                </div>
                <br />`
            }
            else if(employee.getRole() === "Intern"){
                return `<div class="card">
                <h1>${employee.name}</h1>
                <h2>Intern</h2>
                <p>Email: ${employee.email}</p>
                <p>School Name: ${employee.school}</p>
                </div>
                <br />`
            }
        })}
        </div>
    </body>
    </html>`;
}

module.exports = generateHTML; 