const express = require('express');
const app = express();


//CRUD
// list many items GET/routines
//list an item GET/routines/:id
//create a new item POST/routines
//editing an item PUT/routines/:id
//delete an item DELETE/routines/:id
let routines = [
    {
        id: 1,
        activity: "wake up"
    },
    {
        id: 2,
        activity: "body exercise"
    },
    {
        id: 3,
        activity: "take breakfast"
    },
    {
        id: 4,
        activity: "following and adhering learning schedules and coding"
    }
]
app.get('/routines',function (req,res) {
    console.log("my routines",routines);
    return res.send(routines);
})
app.listen(8000,function () {
    console.log("loading the application");
})