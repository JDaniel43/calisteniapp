const model = require('../model/modal');

exports.getRutinas = async (tipo, intencidad)=>{
    return await model.getRutinas(tipo, intencidad);
}