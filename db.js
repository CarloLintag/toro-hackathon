const { Sequelize, DataTypes } = require('sequelize')
const EmployeeModel = require('./models/employee.model')
const AdminModel = require('./models/admin.model')
const AdminAccountModel = require('./models/admin_account.model')
const AdminClearanceModel = require('./models/admin_clearance.model')
const AttendanceModel = require('./models/attendance.model')
const SickLeaveModel = require('./models/sick_leave.model')
const VacationLeaveModel = require('./models/vacation_leave.model')
const EmployeeInfoModel = require('./models/employee_info.model')

const sequelize = new Sequelize({
  dialect: 'mysql',
  database: 'torohackathon',
  username: 'torodevadmin@torodevserver',
  password: 'Pa$sw0rd',
  host: 'torodevserver.mysql.database.azure.com',
  port: '3306'
})


const Employee = EmployeeModel(sequelize, DataTypes)
const Admin = AdminModel(sequelize, DataTypes)
const AdminAccount = AdminAccountModel(sequelize, DataTypes)
const AdminClearance = AdminClearanceModel(sequelize, DataTypes)
const SickLeave = SickLeaveModel(sequelize, DataTypes)
const VacationLeave = VacationLeaveModel(sequelize, DataTypes)
const Attendance = AttendanceModel(sequelize, DataTypes)
const EmployeeInfo = EmployeeInfoModel(sequelize, DataTypes)

Employee.hasOne(EmployeeInfo)
EmployeeInfo.belongsTo(Employee)

Admin.hasOne(AdminAccount)
AdminAccount.belongsTo(Admin)

AdminClearance.hasMany(Admin)
Admin.belongsTo(AdminClearance)

Employee.hasMany(Attendance);
Attendance.belongsTo(Employee);

if (false) {
    sequelize.sync()
    .then(() => {
      console.log('Database sync is complete.')
    })
  }

  module.exports = {
    Employee,
    Admin,
    AdminAccount,
    AdminClearance,
    SickLeave,
    VacationLeave,
    Attendance,
    EmployeeInfo
  }



