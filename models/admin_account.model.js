module.exports = (sequelize, type) => {
    return sequelize.define('admin_account', {
      id: {
        type: type.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
      },
      email:{
        type: type.STRING,
        allowNull: false,
      },
      password:{
        type: type.STRING,
        allowNull: false,
      }
    })
  }