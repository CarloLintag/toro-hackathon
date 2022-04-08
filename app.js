const express = require('express')
let mustacheExpress = require('mustache-express')

const app = express()
const port = 4000

app.use(express.json())

app.set('views', './views') 
app.set('view engine', 'mustache')  

app.engine('html', mustacheExpress());

const { Employee, Admin, AdminAccount, AdminClearance, Attendance, SickLeave, VacationLeave } = require('./db')

// ---------------------------- HTML ROUTES ---------------------------------------
app.get('/employees', (req, res) => {
    res.render('view-employees.html')
  })
  
  app.get('/employees/:id', (req, res) => {
    res.render('view-employee.html', {id: req.params.id})
  })
  
  app.get('/employees/edit/:id', (req, res) => {
    res.render('edit-employee.html', {id: req.params.id})
  })
  
  // ---------------------------- API ROUTES ---------------------------------------
  
  // EMPLOYEE START
  app.get('/api/employee', (req, res) => {
    // TODO - view all employees
    Employee.findAll({ include: [SickLeave, VacationLeave] })
      .then(result => {
        res.json({
          result: result,
          message: `Successfully retrieved ${result.length} record/s.`
        })
      })
      .catch(error => {
        res.json({
          result: null,
          message: 'Failed to retrieve record/s.'
        })
      })
  })
  
  app.get('/api/employee/:id', (req, res) => {
    // TODO - view a specific employee
    const id = req.params.id
    
    
    Employee.findByPk(id)
      .then(result => {
        if (result) {
          res.json({
            result: result,
            message: "Successfully retrieved a record."
          })
        } else {
          throw "error"
        }
      })
      .catch(error => {
        res.json({
          result: null,
          message: `Failed to retrieve record with an ID of ${id}.`
        })
      })
  })
  
  app.post('/api/employee', (req, res) => {
    // TODO - add an employee
    const data = req.body
    
    Employee.create(data)
      .then(result => {
        res.json({
          result: result,
          message: 'Successfully created a record.'
        })
      })
      .catch(error => {
        res.json({
          result: null,
          message: `Failed create record.`
        })
      })
  })
  
  app.put('/api/employee/:id', (req, res) => {
    // TODO - update an employee
    const id = req.params.id
    const data = req.body
    Employee.update(data, {
      where: {
        id: id
      }
    })
      .then(result => {
        res.json({
          result: result,
          message: 'Successfully updated record.'
        })
      })
      .catch(error => {
        res.json({
          result: null,
          message: `Failed update record with an ID of ${id}.`
        })
      })
  })
  
  app.delete('/api/employee/:id', (req, res) => {
    // TODO - delete an employee
    const id = req.params.id
    Employee.destroy({
      where: {
        id: id
      }
    })
      .then(result => {
        res.json({
          result: result,
          message: 'Successfully deleted record.'
        })
      })
      .catch(error => {
        res.json({
          result: null,
          message: `Failed to delete record with an ID of ${id}.`
        })
      })
  })
  //EMPLOYEE END



//ADMIN START
  app.get('/api/admin', (req, res) => {
    // TODO - view all employees
    Admin.findAll(({ include: [AdminClearance] })
      .then(result => {
        res.json({
          result: result,
          message: `Successfully retrieved ${result.length} record/s.`
        })
      })
      .catch(error => {
        res.json({
          result: null,
          message: 'Failed to retrieve record/s.'
        })
      })
  )

})
  
  app.get('/api/admin/:id', (req, res) => {
    // TODO - view a specific employee
    const id = req.params.id
    Admin.findByPk(id)
      .then(result => {
        if (result) {
          res.json({
            result: result,
            message: "Successfully retrieved a record."
          })
        } else {
          throw "error"
        }
      })
      .catch(error => {
        res.json({
          result: null,
          message: `Failed to retrieve record with an ID of ${id}.`
        })
      })
  })
  
  app.post('/api/admin', (req, res) => {
    // TODO - add an employee
    const data = req.body
    Admin.create(data)
      .then(result => {
        res.json({
          result: result,
          message: 'Successfully created a record.'
        })
      })
      .catch(error => {
        res.json({
          result: null,
          message: `Failed create record.`
        })
      })
  })
  
  app.put('/api/admin/:id', (req, res) => {
    // TODO - update an employee
    const id = req.params.id
    const data = req.body
    Admin.update(data, {
      where: {
        id: id
      }
    })
      .then(result => {
        res.json({
          result: result,
          message: 'Successfully updated record.'
        })
      })
      .catch(error => {
        res.json({
          result: null,
          message: `Failed update record with an ID of ${id}.`
        })
      })
  })
  
  app.delete('/api/admin/:id', (req, res) => {
    // TODO - delete an employee
    const id = req.params.id
    Admin.destroy({
      where: {
        id: id
      }
    })
      .then(result => {
        res.json({
          result: result,
          message: 'Successfully deleted record.'
        })
      })
      .catch(error => {
        res.json({
          result: null,
          message: `Failed delete record with an ID of ${id}.`
        })
      })
  })
//ADMIN END

