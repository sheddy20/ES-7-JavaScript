const employeeInfo = [
    {
        "name": "Harald-Hass",
        "age": 50,
        "country": "Ireland",
        "position": "CFO",
    },
    {
        "name": "Howard-Stark",
        "age": 55,
        "country": "United-State-Of-America",
        "position": "CTO",
    },
    {
        "name": "Ben-Carson",
        "age": 40,
        "country": "United-State-Of-America",
        "position": "CPO",
    },
]

const newEmployee = employeeInfo.map(employee => employee.country);

//Using the push method
// for(let i = 0; i < employeeInfo.length; i++){
//     newEmployee.push(employeeInfo[i].country);
//     newEmployee.push(employeeInfo[i].name);
//     newEmployee.push(employeeInfo[i].position);
// }

//Using the map method

console.log(newEmployee);