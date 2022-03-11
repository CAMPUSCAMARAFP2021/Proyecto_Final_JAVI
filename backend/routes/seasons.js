var express = require('express');
var router = express.Router();
var seasonsController = require('../controllers/season');

router.post('/',async(req, res) => {
    const {bdwinner} = req;
    const {season} = req.body;
    const result =  await seasonsController.createSeasonbybdwinner(season, bdwinner);
    res.json(result);
});

router.get('/', async(req, res) => {
    const {bdwinner} = req;
    const seasons = await seasonsController.getSeasonsbybdwinner(bdwinner);
    res.json(seasons);
})

router.get('/:seasonId', async(req, res) => {
    const {seasonId} = req.params;
    const season = await seasonsController.getSeason(seasonId);
    res.json(season);
})

router.delete('/:season', async(req,res) => {
    const {bdwinner} = req;
    const {season} = req.params;
    const result = await seasonsController.deleteSeason(season, bdwinner);
    res.json(result);
});

module.exports = router;