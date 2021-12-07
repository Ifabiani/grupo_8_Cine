module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        title: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        },
        length: { 
            type: dataTypes.BIGINT(10),
            allowNull:false
        },
        genre_id: {
            type: dataTypes.BIGINT(10),
            allowNull:false
        },
        origin_id: {
            type: dataTypes.BIGINT(10),
            allowNull:false
        },
        calification_id: {
            type: dataTypes.BIGINT(10),
            allowNull:false
        },
        synopsis: {
            type: dataTypes.STRING(500),
            allowNull:false
        },
        created_at: {
            type: dataTypes.TIMESTAMP(),
            allowNull: true
        },
        delete_at: {
            type: dataTypes.TIMESTAMP(),
            allowNull: true
        },
        release_at: {
            type: dataTypes.TIMESTAMP(),
            allowNull: true
        },
        updated_at: {
            type: dataTypes.TIMESTAMP(),
            allowNull: true
        },
        
    };
    let config = {
        tableName: 'movies',
        timestamps: true,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    }
    const Movie = sequelize.define(alias,cols,config);

    Movie.associate = function (models) {
        Movie.belongsTo(models.Genre, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "genre",
            foreignKey: "genre_id"
        })

        Movie.belongsTo(models.Calification, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "calification",
            foreignKey: "calification_id"
        })

        Movie.belongsTo(models.Origin, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "origin",
            foreignKey: "origin_id"
        })

        Movie.belongsToMany(models.Actor, { // models.Actor -> Actors es el valor de alias en actor.js
            as: "actors",
            through: 'actor_movie',
            foreignKey: 'movie_id',
            otherKey: 'actor_id',
            timestamps: false
        })

        Movie.belongsToMany(models.Director, { // models.Actor -> Actors es el valor de alias en actor.js
            as: "directors",
            through: 'director_movie',
            foreignKey: 'movie_id',
            otherKey: 'director_id',
            timestamps: false
        })
    }

    return Movie
};