
const express = require('express');

const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
    res.send ('vao api mobile');
})

const mongoose = require('mongoose');

const carModel = require('./carModel');

const COMMON = require('./COMMON');

router.get('/list', async (req, res) => {
    await mongoose.connect(COMMON.uri);

    let cars = await carModel.find();

    console.log(cars);

    res.send(cars);
})

router.post('/add_xe', async (req, res) => {
    await mongoose.connect(COMMON.uri);

    // let car = {
    //     ten: 'xe 3',
    //     namSX: 2024,
    //     hang: 'Mitsubishi',
    //     gia: 7500
    // }

    let car = req.body;

    console.log(car)

    let kq = await carModel.create(car);
    console.log(kq);

    let cars = await carModel.find();

    res.send(cars);

})
