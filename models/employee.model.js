module.exports = (sequelize, type) => {
    return sequelize.define('employee', {
      id: {
        type: type.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
        defaultvalue: 10000,
      },
      lastName: {
        type: type.STRING,
        allowNull: false,
      },
      firstName: {
        type: type.STRING,
        allowNull: false,
      },
      middleName: {
        type: type.STRING,
      },
      fullName: {
        type: type.VIRTUAL,
        get() {
          return `${this.lastName}, ${this.firstName}  ${this.middleName}`
        }
      }
    })
  }
  