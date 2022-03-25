// reading json file 
let fs = require("fs");
data = fs.readFileSync("emp.json");
dataString = data.toString();
jsArray = JSON.parse(dataString);
console.log(jsArray);
//response json 
let express = require("express");
let app = express();
app.listen(3003,()=>{
    console.log('Server is running on 3003');
});
app.get('/',(request,response)=>{
    response.json(jsArray)
});
//----OUTPUT -----
//C:\Users\ldove\Desktop\rigved-students-activity\rigved-students-activity\NodeJS\Day 24>node activityexpress.js
//[
//  { id: 11, name: 'Alex', Salaray: 50000 },
//    { id: 12, name: 'Bruce', Salaray: 40000 },
//    { id: 13, name: 'Chris', Salaray: 70000 }
//  ]
//  Server is running on 3003