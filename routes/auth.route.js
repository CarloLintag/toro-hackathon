const express = require('express')
const { Account } = require('../db')
const router = express.Router()

  // TODO: return 403
  router.post('/', (req, res) => {
    Account.findByPk(req.body.username)
      .then(result => {
        if (result) {
            res.json(
                {
                  account: result
                }
              )
        } else {
            res.status(403).json(
                {
                  message: "Invalid credentials (5)."
                }
              )
        }
      })
      .catch(error => {
        res.status(403).json(
          {
            message: "Invalid credentials (7)."
          }
        )
      })
    
  })


module.exports = router
