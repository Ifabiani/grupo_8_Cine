// const { TINYINT, INTEGER } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Calification';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true
        },
    };
    let config = {
        tableName: 'calification', 
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Calification = sequelize.define(alias, cols, config);

    Calification.associate = function(models) {
        Calification.hasMany(models.Movie, { // models.Movies -> Movie es el valor de alias en movie.js
            as: "movies", // El nombre del modelo pero en plural
            foreignKey: "calification_id"
        })
    }

    return Calification
};