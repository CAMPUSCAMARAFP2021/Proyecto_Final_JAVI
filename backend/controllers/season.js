const Season = require('../models/Season');

const createSeasonbybdwinner = async(season, bdwinner) => {
    season.bdwinner=bdwinner
    return await Season.create(season);
}

const getSeasons = async() => {
    return await Season.find();
}

const getSeason = async(seasonId) => {
    return await Season.findById(seasonId);
}

const deleteSeason = async(season, bdwinner)=> {
    await Season.findByIdAndDelete(season);
    return false;
}

const getSeasonsbybdwinner = async (bdwinner) => {

    return await Season.find({bdwinner})

}

module.exports = {
    createSeasonbybdwinner,
    getSeasons,
    getSeason,
    deleteSeason,
    getSeasonsbybdwinner
};