const express = require('express')
const { Employee } = require('../db');
const router = express.Router()

// TODO: return 403
router.get('/:id', (req, res) => {
  const allowedRoles = ['superuser', 'l1Admin', 'l2Admin']
  if (!allowedRoles.includes(req.headers.role)) {
    res.status(403).json(
      {
        message: 'Permission denied.'
      }
    ) 
  }
  
  Employee.findByPk(req.params.id)
    .then(result => {
      if (result) {
        res.status(200).json(
          {
            employee: result
          }
        )
      } else {
        res.status(404).json(
          {
            message: 'Employee not found.'
          }
        )
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

// TODO: return 403
router.get('/', (req, res) => {
  const allowedRoles = ['superuser', 'l1Admin', 'l2Admin']
  if (!allowedRoles.includes(req.headers.role)) {
    res.status(403).json(
      {
        message: 'Permission denied.'
      }
    ) 
  }

  Employee.findAll()
    .then(result => {
      res.status(200).json(
        {
          employee: result
        }
      )
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

// TODO: return 403
router.delete('/:id', (req, res) => {
  const allowedRoles = ['superuser', 'l1Admin']
  if (!allowedRoles.includes(req.headers.role)) {
    res.status(403).json(
      {
        message: 'Permission denied.'
      }
    ) 
  }

  Employee.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(result => {
      if (!result) {
        res.status(404).json(
          {
            message: 'Employee not found.'
          }
        )
      } else {
        res.status(200).json(
          {
            message: 'Successfully deleted employee.'
          }
        )
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

// TODO: return 403
router.put('/:id', (req, res) => {
  const allowedRoles = ['superuser', 'l1Admin']
  if (!allowedRoles.includes(req.headers.role)) {
    res.status(403).json(
      {
        message: 'Permission denied.'
      }
    ) 
  }

  Employee.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(result => {
      if (!result[0]) {
        res.status(404).json(
          {
            message: 'Employee not found.'
          }
        )
      } else {
        // return updated employee instance
        Employee.findByPk(req.params.id)
          .then(result => {
            if (result) {
              res.status(200).json(
                {
                  employee: result
                }
              )
            } else {
              res.status(404).json(
                {
                  message: 'Employee not found.'
                }
              )
            }
          })
          .catch(error => {
            res.status(500).json(error)
          })
      }
      res.json(result)
    })
    .catch(error => {
      res.status(500).json(error)
    })
  
})

// TODO: return 403
router.post('/', (req, res) => {
  const allowedRoles = ['superuser', 'l1Admin']
  if (!allowedRoles.includes(req.headers.role)) {
    res.status(403).json(
      {
        message: 'Permission denied.'
      }
    ) 
  }

  Employee.create(req.body)
    .then(result => {
      res.json(
        {
          employee: result
        }
      )
    })
    .catch(error => {
      res.status(309).json(
        {
          message: "There is an existing employee with this ID."
        }
      )
    })
  
})


//time in
router.post('/:id/timein', (req, res) => {
  const allowedRoles = ['superuser', 'l1Admin', 'l2Admin']
  if (!allowedRoles.includes(req.headers.role)) {
    res.status(403).json(
      {
        message: 'Permission denied.'
      }
    ) 
  }
  
  Account.create(req.body)
    .then(result => {
      res.json(
        {
          employee: result
        }
      )
    })
    .catch(error => {
      res.status(309).json(
        {
          message: "There is an existing employee with this ID."
        }
      )
    })
})




module.exports = router

