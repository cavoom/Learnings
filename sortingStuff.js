let employees = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 279,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'Ana',
        lastName: 'Rosy',
        age: 253,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'Zion',
        lastName: 'Albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];

var sortedSuckers = [];
sortEmOut(employees,(sortedSuckers)=>{
    console.log('sorted suckers: ',sortedSuckers[0])
})

function sortEmOut(employees,callback){
    employees.sort((a, b) => {
        return a.age - b.age;
    });
    employees.forEach((e) =>   {
        //console.log(`${e.firstName} ${e.lastName} ${e.age}`);
        sortedSuckers.push(employees)
        });

        callback(sortedSuckers)
    
}




