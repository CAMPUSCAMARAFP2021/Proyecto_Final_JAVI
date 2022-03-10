const Season = require('../models/Season');

const createSeason = async(Season) => {
    return await Season.create(season);
}

const getSeasons = async(bdwinner) => {
    return bdwinner ? 
        await Season.find({bdwinner}) : 
        await Season.find();
}

const getSeason = async(seasonId) => {
    return await Season.findById(seasonId);
}

const deleteSeason = async(seasonId)=> {
    const Season = await Season.findByIdAndDelete(seasonId);
    return false;
}

module.exports = {
    createSeason,
    getSeasons,
    getSeason,
    deleteSeason,
};