function generateHTML(employeesArray){
   
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
    </head>
    <body>
        <h1>My Team</h1>
        <!--Looping through all items in an array -->
        ${employeesArray.map(employee =>{
            console.log("Each Array Item" , employee); 
            if(employee.getRole() === "Manager"){
                return `<div>
                <h1>${employee.name}</h1>
                <h2>Manager </h2>
                <p>Email: ${employee.email}</p>
                <p>OfficeNumber: ${employee.officeNumber}</p>
                </div>`
            }
            else{
                return `<h3> createother cards </h3>`
            }
        })}
    </body>
    </html>`;
}

module.exports = generateHTML; 