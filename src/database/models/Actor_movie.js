module.exports = (sequelize, dataTypes) => {
    let alias = 'Actor_movie'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        movie_id: {
            type: dataTypes.INTEGER(10),
            allowNull: false,
        },
        actor_id: {
            type: dataTypes.INTEGER(10),
            allowNull: false,
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
        tableName: 'movies',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const Actor_movie = sequelize.define(alias,cols,config);

    Actor_movie.associate = function (models) {

        Actor_movie.belongsTo(models.Movie,{
            foreignKey: 'movie_id'
        })
        Actor_movie.belongsTo(models.Actor, {
            foreignKey: 'actor_id'
        })

    }


    return Actor_movie
}
