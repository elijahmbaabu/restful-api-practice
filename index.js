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
        activity : "wake up"
    },
    {
        id: 2,
        activity : "body exercise"
    },
    {
        id: 3,
        activity : "take breakfast"
    },
    {
        id: 4,
        activity : "following and adhering to learning schedules and coding"
    },
    {
        id: 5,
        activity  : "sports, gaming and other leisure activities"
    }
]
app.get('/routines',function (req,res) {
    console.log("my routines", routines);
    return res.send(routines);

})
//getting one item
app.get('/routines/:id',function (req,res) {
    let id = req.params.id;
    let routine = routines.find(function(routine){
        return routine.id === parseInt(id);
    })
    if(!routine){
        return res.send("the routine not found. thanks")
    }
    console.log("routine selected", routine);
    return res.send(routine);
})

app.listen(8000,function () {
    console.log("progressing with web app building");
})