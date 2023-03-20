const express = require ('express');
const { Timestamp } = require('mongodb');
const app = express()
const dashRouter = require('./routes/dash')
const port = 3000;
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'));

app.use('/dash', dashRouter)

app.get('/', (req, res) => {
    const available = [{
        roomtitle: 'Test',
        location: 'Test location',
        floor: 'test floor',
        maxguests: 'test guests',
    }]

    const reservation = [{
        location: 'Test location',
        room: 'test floor',
        date: Date.now(),
        timestart: 'time set',
        timeend: 'time set'
    }]

    res.render("dashboard", {available: available})
    res.render("dashboard", {reservation: reservation})
});

app.listen(port, 'localhost', () =>{
    console.log("Server is listening")
    console.log(`Listening to port ${port}`);

});
