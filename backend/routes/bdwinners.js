var router = require('express').Router();
var bdwinnersController = require('../controllers/bdwinner');

var seasonsRouter = require('./seasons');

router.post('/',async(req, res) => {
    const {bdwinner} = req.body;
    const result =  await bdwinnersController.createBdwinner(bdwinner);
    res.json(result);
});


router.post('/login',async(req, res) => {
    const {user, password} = req.body;
    const result = await bdwinnersController.login(user, password);
    res.json(result);
});

router.get('/', async(req, res) => {
    const bdwinners = await bdwinnersController.getBdwinners();
    res.json(bdwinners);
})

router.get('/:bdwinnerId', async(req, res) => {
    const {bdwinnerId} = req.params;
    const bdwinner = await bdwinnersController.getBdwinner(bdwinnerId);
    res.json(bdwinner);
})

router.use('/:bdwinnerId/seasons', async (req, res, next) => {
    const {bdwinnerId} = req.params;
    req.bdwinner = await bdwinnersController.getBdwinner(bdwinnerId);
    next();
} ,seasonsRouter);


router.delete('/:bdwinnerId', async(req,res) => {
    const {bdwinnerId} = req.params;
    const result = await bdwinnersController.deleteBdwinner(bdwinnerId);
    res.json(result);
});

module.exports = router;