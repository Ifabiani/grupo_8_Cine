module.exports = (sequelize, dataTypes) => {
    let alias = 'Director';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
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
        tableName: 'directors',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Director = sequelize.define(alias, cols, config); 

    Director.associate = function (models) {
        Director.belongsToMany(models.Movie, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "movies",
            through: 'director_movie',
            foreignKey: 'director_id',
            otherKey: 'movie_id',
            timestamps: false
        })
    }

    return Director
};