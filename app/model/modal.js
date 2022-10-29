let connectionPool = require('../config/database_config').connectionPool

exports.getRutinas = async(tipo, intencidad)=>{
    let sql ="select * from rutinas where tipo=? and intencidad=?"
    return (await connectionPool).query(sql,[tipo, intencidad])
}