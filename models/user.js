'use strict';
const Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.ServiceProvider, { through: models.Subscribtion });
      User.belongsToMany(models.Branch, { through: models.UserBranch });
      User.hasMany(models.Post, {
        foreignKey: {
          allowNull: false
        }
      });
      User.hasMany(models.Service, {
        foreignKey: {
          allowNull: false
        }
      });
      User.hasMany(models.Product, {
        foreignKey: {
          allowNull: false
        }
      });
      User.hasMany(models.Comment, {
        foreignKey: {
          allowNull: false
        }
      });
      User.hasMany(models.Reaction, {
        foreignKey: {
          allowNull: false
        }
      });
      User.hasMany(models.Reply, {
        foreignKey: {
          allowNull: false
        }
      });
      User.hasMany(models.Order, {
        foreignKey: {
          allowNull: false
        }
      });
    }
  }
  User.init({
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};