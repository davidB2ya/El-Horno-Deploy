const Sales = require('../db/models/Sales');

//Sales

const salesRouter = require('express').Router();

salesRouter.post('/', async (req, res) => {

    try {
        const { client, phone, price, address, ingredents, namePizza } = req.body;

        if (!client || !phone || !address ) 
            return res.status(400).json({ msg: 'Please fill in all fields.' });

        if (phone.toString().length !== 10)
            return res.status(400).json({ msg: 'Invalid phone.' });
        
        // const phoneUser = await Sales.findOne({ phone });

        // if (phoneUser) return res.status(400).json({ msg: 'This phone already exists.' });

        const newSales = new Sales({
            client,
            phone,
            price,
            address,
            ingredents,
            namePizza
        });
        console.log(newSales);
        
        await newSales.save();
        res.json({ msg: 'We have a new sale!' });
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
})

module.exports = {
    salesRouter
}