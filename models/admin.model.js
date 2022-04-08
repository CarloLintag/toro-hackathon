module.exports = (sequelize, type) => {
    return sequelize.define('admin', {
      id: {
        type: type.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
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
      },
    })
  }
  