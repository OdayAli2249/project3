'use strict';
const Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reply.belongsTo(models.User);
      Reply.belongsTo(models.ServiceProvider);
      Reply.belongsTo(models.Comment);
    }
  }
  Reply.init({
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
    modelName: 'Reply',
  });
  return Reply;
};