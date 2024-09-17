const express = require("express");
const router = new express.Router();
const items = require("./fakeDB");

// get all items
router.get('', (req, res, next) => {
    try {
        console.log("test")
        return res.json(items);
    } catch (e){
        next(e)
    }
});

//add new item
router.post('', (req, res, next) => {
    try{
        items.push(req.body);
        res.json(items)
    } catch (e){
        next(e)
    }

});

//find new item
router.get('/:item_name', (req, res, next) => {
    try {
        let item_name = req.params.item_name;
        let foundItem = items.find(item => item.item_name === item_name);
        return res.json({foundItem});
    } catch (e) {
        next(e)
    }
});

//edit item
router.patch('/:item_name', (req, res, next) => {
try {
        let item_name = req.params.item_name;
        let foundItem = items.find(item => item.item_name === item_name);
        return res.json({foundItem});
    } catch (e) {
        next(e)
    }
});

//delete item
router.delete('/:item_name', (req, res, next) => {
try {
        let item_name = req.params.item_name;
        let foundItem = items.find(item => item.item_name === item_name);
        delete foundItem;

        return res.json({message:'item removed'});
    } catch (e) {
        next(e)
    }
});


module.exports = router;