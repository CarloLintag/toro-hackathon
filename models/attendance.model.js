module.exports = (sequelize, type) => {
    return sequelize.define('attendance', {
      id: {
        type: type.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
      },
      timeIn: {
        type: type.DATE,
        allowNull: false,
      },
      timeOut: {
        type: type.DATE,
        allowNull: false,
      },
    })
  }