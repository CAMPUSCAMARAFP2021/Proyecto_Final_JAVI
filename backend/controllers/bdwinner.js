const bdwinner = require('../models/Bdwinner');
const jwt = require('jsonwebtoken');


const buildJWT = (bdwinner) => {
    const time = 1212;
    
    return jwt.sign({
        time,
        bdwinner
    }, 'secreto');
}


const login = async (bdwinner,password) => {
    const bdwinner = await bdwinner.findOne({name});
    // if(!author) throw new Error('usuario no encontrado');
    // console.log('=============>', author)
    // const passwordEncriptada = encriptarPassword(password);
    return buildJWT(bdwinner);
    // if (passwordEncriptada == author.password) return buildJWT(author);
    // else throw new Error('la passord es incorrecta');
}

const createBdwinner = async(bdwinner) => {

    bdwinner.password = encriptarPassword('hola mundo');
    return await Bdwinner.create(bdwinner);
}

const getBdwinners = async() => {
    return await Bdwinner.find();
}

const getBdwinner = async(bdwinnerId) => {
    return await Bdwinner.findById(bdwinnerId);
}

const deleteBdwinner = async(bdwinnerId)=> {
    const season = await Season.findByIdAndDelete(bdwinnerId);
    return false;
}

module.exports = {
    login,
    createBdwinner,
    getBdwinners,
    getBdwinner,
    deleteBdwinner,
};