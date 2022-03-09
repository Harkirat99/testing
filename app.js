const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/detail');

let db = mongoose.connection;

db.once('open', function () {
    console.log('connected to database');
})
db.on('error', function (err) {
    console.log(err);
})

const app = express();

bodyParser = require('body-parser');
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let studentApi = require('./api/students')
let classApi = require('./api/classes')
let userApi = require('./api/user')
let teacherApi = require('./api/teacher')

app.post('/students', async function (req, res) {
    let response = await studentApi.create(req.body)
    res.json(response)
})

app.put('/students/:id', async function (req, res) {
    try {
        let response = await studentApi.update(req.params.id, req.body)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }
})

app.get('/students/:id', async function (req, res) {
    let response = await studentApi.get(req.params.id)
    res.json(response)
})

app.get('/students', async function (req, res) {
    let response = await studentApi.search(req.query)
    res.json(response)
})

app.delete('/students/:id', async function (req, res) {
    let response = await studentApi.delete(req.params.id)
    res.json(response)

})

app.post('/classes', async function (req, res) {
    let response = await classApi.create(req.body)
    res.json(response)
})

app.put('/classes/:id', async function (req, res) {
    try {
        let response = await classApi.update(req.params.id, req.body)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }
})

app.get('/classes/:id', async function (req, res) {
    let response = await classApi.get(req.params.id)
    res.json(response)
})

app.get('/classes', async function (req, res) {
    let response = await classApi.search(req.query)
    res.json(response)
})

app.delete('/classes/:id', async function (req, res) {
    let response = await classApi.delete(req.params.id)
    res.json(response)

})

app.post('/users', async function (req, res) {
    let response = await userApi.create(req.body)
    res.json(response)
})

app.post('/users/login', async function (req, res) {
    try {
        let response = await userApi.login(req.body)
        res.json(response)
    }
    catch (err) {
        res.json(err.message)
    }
})

app.post('/teachers', async function (req, res) {
    let response = await teacherApi.create(req.body)
    res.json(response)
})

app.put('/teachers/:id', async function (req, res) {
    try {
        let response = await teacherApi.update(req.params.id, req.body)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }
})

app.get('/teachers/:id', async function (req, res) {
    let response = await teacherApi.get(req.params.id)
    res.json(response)
})

app.get('/teachers', async function (req, res) {
    let response = await teacherApi.search(req.query)
    res.json(response)
})

app.delete('/teachers/:id', async function (req, res) {
    let response = await teacherApi.delete(req.params.id)
    res.json(response)
})

app.listen(3000, function () {
    console.log('server started on port 3000...')
});