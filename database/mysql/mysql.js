
const{ Sequelize, DataTypes, Model} = requiere ('sequelize');

const dbConfig ={
    host:'',
    dialect:'mysql'

}

class Mysql extends Sequelize{
    constructor(config){
      super(config.database, config.username, config.password, Object.assign(dbConfig, config.dbConfig));
      this.config={
          database:'',
          username:'',
          password:'',
          dbConfig: dbConfig
      };

      this.config= Object.assign(this.config, config)
    }
}

module.exports = {Mysql, DataTypes, Model};