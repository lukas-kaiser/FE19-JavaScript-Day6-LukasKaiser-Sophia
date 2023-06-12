let employees = `[{
"id": "01",
"firstName": "Monkey D.",
"lastName": "Luffy",
"email": "meat@strawhats.com",
"jobTitle": "Captain",
"salary": "50.000 Berry"
},{
"id": "02",
"firstName": "Roronoa",
"lastName": "Zoro",
"email": "booze@strawhats.com",
"jobTitle": "Swordsman",
"salary": "45.000 Berry"
},{
"id": "03",
"firstName": "Nami",
"lastName": "Unknown",
"email": "oranges@strawhats.com",
"jobTitle": "Navigator",
"salary": "80.000 Berry"
    },{
"id": "04",
"firstName": "Usopp",
"lastName": "Unknown",
"email": "sogeking@strawhats.com",
"jobTitle": "Sniper",
"salary": "40.000 Berry"
    },{
"id": "05",
"firstName": "Sanji",
"lastName": "Vinsmoke",
"email": "cooking@strawhats.com",
"jobTitle": "Cook",
"salary": "45.000 Berry"
    },{
"id": "06",
"firstName": "Tony Tony",
"lastName": "Chopper",
"email": "blossoms@strawhats.com",
"jobTitle": "Doctor",
"salary": "35.000 Berry"
    },{
"id": "07",
"firstName": "Nico",
"lastName": "Robin",
"email": "ohara@strawhats.com",
"jobTitle": "Archaelogist",
"salary": "35.000 Berry"
    },{
"id": "08",
"firstName": "Franky",
"lastName": "Flam",
"email": "boom@strawhats.com",
"jobTitle": "Shipwright",
"salary": "35.000 Berry"
    },{
"id": "09",
"firstName": "Brook",
"lastName": "Unknown",
"email": "soulking@strawhats.com",
"jobTitle": "Musician",
"salary": "35.000 Berry"
    },{
"id": "10",
"firstName": "Jinbe",
"lastName": "Unknown",
"email": "fishman@strawhats.com",
"jobTitle": "Helmsman",
"salary": "35.000 Berry"
    }
]`

let employeesParsed= JSON.parse(employees);

const content = document.getElementById("content");

for (let pirate of employeesParsed) {
content.innerHTML += 
`<p>${pirate.id}</p>
<p>${pirate.firstName}</p>
<p>${pirate.lastName}</p>
<p>${pirate.email}</p>
<p>${pirate.jobTitle}</p>
<p>${pirate.salary}</p>
`
    
}