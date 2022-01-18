const express = require('express');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const db = require('../database/models')
const sequelize = db.sequelize;
const { Op} = require('sequelize');

const apiUsersController={
    users: (req, res) => {
        db.User.findAll({
            include: ['category']
        })
            .then(users => {

               let usuarios = [];
               users.forEach(user=>{
                usuarios.push({
                    id: user.id,
                    name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    url: 'http://localhost:3031/api/usuarios/' + user.id
                })
               })
               res.json({
                count: users.length,
                users: usuarios
               })
            })    
    },

    detail: (req, res) =>{
        db.User.findByPk(req.params.id)
        .then(user =>{
          return  res.json({
              id: user.id,
              name: user.first_name,
              apellido: user.last_name,
              emal: user.email,
              nacimiento: user.birth,
              created_at : user.created_at,
              updated_at: user.updated_at,
              imagen: user.image,
              url: '/Images/Users/' + user.image

          })
        })
    }
}

module.exports = apiUsersController