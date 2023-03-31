const express = require('express');
const app = express();
const morgan = require('morgan');
const routerProducts = require('./routes/routes.products');

const PORT = 3000 || 4000;

// For parsing application/json
app.use(express.json());
 
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


//middleware, when we use the keyword "use" means it is a middleware
app.use(morgan('dev'));


//web routes crud products
app.use('/product', routerProducts);




// route not found
app.use((req, res) => {
    res.status(404).json({
        title:404,
        description:"Site not found"
    });
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});