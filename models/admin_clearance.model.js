module.exports = (sequelize, type) => {
    return sequelize.define('admin_clearance', {
      id: {
        type: type.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
        },

    clearanceLevel:{
        type: type.STRING,
        allowNull: false,
    }
    })
  }
  