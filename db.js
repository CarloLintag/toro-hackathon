const { Sequelize, DataTypes } = require('sequelize')
const EmployeeModel = require('./models/employee.model')
const AccountModel = require('./models/account.model')

const sequelize = new Sequelize({
  dialect: 'mysql',
  database: 'torohackathon',
  username: 'torodevadmin@torodevserver',
  password: 'Pa$sw0rd',
  host: 'torodevserver.mysql.database.azure.com',
  port: '3306'
})


const Employee = EmployeeModel(sequelize, DataTypes)
const Account = AccountModel(sequelize, DataTypes)

if (false) {
    sequelize.sync()
    .then(() => {
      console.log('Database sync is complete.')
    })
  }

module.exports = {
  Employee,
  Account,
}



