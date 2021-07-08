const { Model, DataTypes } = require("sequelize");

class User extends Model {
    static init(sequelize) {
        return super.init({  // llamo a la clase padre SUPER
            // Model attributes are defined here
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true
            },
            fullname: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            // Other model options go here
            sequelize,  //instancia, conexion a la base de datos
            modelName: 'users',
            timestamps: false,
            createdAt: false,
            updateAt: false
        })
    }
}


module.exports = {User};