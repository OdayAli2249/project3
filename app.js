// const Sequelize = require("sequelize");
// const sequelize = new Sequelize("test2", "postgres", "uzumymw123A@", { dialect: "postgres", host: "localhost" });
// const { Op } = require("sequelize");
// console.log('worked!');

// const User = sequelize.define('user', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     },
// }, {
//     createdAt: false,
//     updatedAt: false
// });

// sequelize.sync({ force: true }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });
const Models = require('./models');
//Sync Database

Models.sequelize.sync({
    force: true,
    logging: console.log
}).then(function () {
    console.log('Nice! Database looks fine')

}).catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!")
});