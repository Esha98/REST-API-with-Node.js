const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        massage: 'Handling GET Request to /Products'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        massage: 'Handling POST Request to /Products'
    });
});

router.get('/:productID', (req, res, next) => {

    const id = req.params.productID;
    if(id == 'special'){
        res.status(200).json({
            massage: 'You discovered special ID',
            id : id
        });
    } else {
        res.status(200).json({
            massage: 'You passed ID',
            id : id
        });
    }
});

router.patch('/:productID', (req, res, next) => {
    
    res.status(200).json({
        massage: 'Updated Product! '
    });
});

router.delete('/:productID', (req, res, next) => {
    res.status(200).json({
        massage: 'Deleted Product! '
    });
});

module.exports = router;