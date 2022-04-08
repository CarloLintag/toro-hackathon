const express = require('express')
const { Account } = require('../db')
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

    Account.findByPk(req.params.id)
      .then(result => {
        if (result) {
          res.status(200).json(
            {
              account: result
            }
          )
        } else {
          res.status(404).json(
            {
              message: 'Account not found.'
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
    Account.findAll()
      .then(result => {
        res.status(200).json(
          {
            account: result
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

    Account.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(result => {
        if (!result) {
          res.status(404).json(
            {
              message: 'Account not found.'
            }
          )
        } else {
          res.status(200).json(
            {
              message: 'Successfully deleted account.'
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

    Account.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(result => {
        if (!result[0]) {
          res.status(404).json(
            {
              message: 'Account not found.'
            }
          )
        } else {
          // return updated employee instance
          Employee.findByPk(req.params.id)
            .then(result => {
              if (result) {
                res.status(200).json(
                  {
                    account: result
                  }
                )
              } else {
                res.status(404).json(
                  {
                    message: 'Account not found.'
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
            account: result
          }
        )
      })
      .catch(error => {
        res.status(309).json(
          {
            message: "There is an existing account with this ID or email."
          }
        )
      })
    
  })


module.exports = router
