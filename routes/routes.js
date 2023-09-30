const express = require('express');
const Model = require('../models/model');
const LogModel = require('../models/logmodel');
const router = express.Router();


//Get all Method
router.get('/getAll', async (req, res) => {


    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {


    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {



    try {
        const id = req.params.id;
        console.log(id);
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


router.post('/new', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        description: req.body.description,
        sku: req.body.sku,
        imagen: req.body.imagen,  
        type: req.body.type,
        price: req.body.price
       
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.post('/logchange', async (req, res) => {
  
    const data = new LogModel({
        date: req.body.date,
        product_id: req.body.product_id,
        productname: req.body.productname,
        newprice: req.body.newprice,  
        oldprice: req.body.oldprice,
        newsku: req.body.newsku,
        oldsku: req.body.oldsku
       
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/getlogs', async (req, res) => {


    try {
        const data = await LogModel.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})




module.exports = router;