import { Sequelize } from "sequelize";

const db = new Sequelize('pomotodo','root','',{
    host:'localhost',
    dialect: 'mysql'
})
export default db