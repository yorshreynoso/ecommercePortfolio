const express = require('express');
const router = express.Router();

router.get('/getProductBy/:id', (req, res) => {
    const {id} = req.params;
    
    res.json({ok:`get product by id ${id}`});
});

router.get('/getAll', (req, res) => {

    res.json({ok:'get all products'});
});

router.post('/insertProduct', (req, res) => {
    const {body} = req;
    console.log(body);
    res.json({ok: 'insert products'});
});

router.put('/update/:id', (req, res) => {
    const {id} = req.params;
    const {body} = req;
    console.log(body);
    res.json({ok: `update by id ${id}`});
});

router.delete('/delete/:id', (req, res) => {
    const {id} = req.params;
    res.json({ok: `deleting id ${id}`});
});

module.exports = router;