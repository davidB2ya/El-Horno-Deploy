const Sales = require('../db/models/Sales');

//Traking Sales

const trakingRouter = require('express').Router();

trakingRouter.post('/today', async (req, res) => {

    try {
        const { date } = req.body;
        console.log(date)
        if (!date ) 
            return res.status(400).json({ msg: 'Invalid date' });

        try {
            const today = await Sales.find({createdAt: date })
            res.json({ data: today })
        } catch {
            res.status(404).send({ error: 'No sales found' })
        }
        
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
})

module.exports = {
    trakingRouter
}