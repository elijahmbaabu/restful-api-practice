const express = require('express');
const app = express();
app.use(express.json());

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
    });
    if(!routine){
        return res.status(404).send("the routine not found. thanks");
    } else{
        res.status(200).send("Request successful")
    }
    console.log("routine selected", routine);
    return res.send(routine);
})
app.post( '/routines', function (req,res) {
   console.log("request has a body", req.body);
   let newRoutine = req.body;
   routines.push(newRoutine);
    return res.status(200).send("item added successfully");

})

app.put('/routines/:id',function (req,res) {

    let found = routines.find(function (item){
        return item.id === parseInt(req.params.id);
    })
    if (found){
        let updated = {
            id: found.id,
            activity: req.body.activity
        };
        let targetRoutine = routines.indexOf(found);
        routines.splice(targetRoutine,1,updated);
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});

app.delete('/routines/:id', function (req,res){
    let found = routines.find(function (item){
        return item.id === parseInt(req.params.id);
    });
    if(found){
        let targetRoutine = routines.indexOf(found);
        routines.splice(targetRoutine,1);
        res.sendStatus(204)
    } else{
        res.sendStatus(404)
    }
});


app.listen(8000,function () {
    console.log("progressing with web app building");
})