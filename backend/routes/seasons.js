var router = require('express').Router();
var seasonsController = require('../controllers/seasons');

router.post('/',async(req, res) => {
    const {season} = req.body;
    const result =  await seasonsController.createSeason(season);
    res.json(result);
});

router.get('/', async(req, res) => {
    const {bdwinner} = req;
    const seasons = await seasonsController.getSeasons(bdwinner);
    res.json(seasons);
})

router.get('/:seasonId', async(req, res) => {
    const {seasonId} = req.params;
    const season = await seasonsController.getSeason(seasonId);
    res.json(season);
})

router.delete('/:seasonId', async(req,res) => {
    const {seasonId} = req.params;
    const result = await seasonsController.deleteSeason(seasonId);
    res.json(result);
});

module.exports = router;