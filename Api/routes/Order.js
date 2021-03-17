const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        massage: 'Handling GET Request to /orders'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        massage: 'Handling POST Request to /orders'
    });
});

router.get('/:orderID', (req, res, next) => {
    const id = req.params.orderID;
    
    res.status(200).json({
        massage: 'Handling the GET Request for individual Order ',
        id : id
    });
    
});

router.delete('/:orderID', (req, res, next) => {
    res.status(200).json({
        massage: 'Order Deleted'
    });
});

module.exports = router;