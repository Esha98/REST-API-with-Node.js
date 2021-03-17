const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require('./Api/routes/Product'); 
const orderRoutes = require('./Api/routes/Order');

//morgan middlewar For logs
app.use(morgan('dev'));

//Router which should handle requests 
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

//Error Handling
app.use((req, res, next) => {
    const error = new Error('Error Not Found');
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        err : {
         message : err.message   
        }
    })
});
module.exports = app;