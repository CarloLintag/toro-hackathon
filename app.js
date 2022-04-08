const express = require('express')
const cors = require('cors');
let mustacheExpress = require('mustache-express')

const app = express()

app.use(express.json())
app.use(cors({
  credentials: false,
}));

app.set('views', './views') 
app.set('view engine', 'mustache')  



app.engine('html', mustacheExpress());

const account = require('./routes/account.route')
const employee = require('./routes/employee.route')
const auth = require('./routes/auth.route')

const routePrefix = '/management/'
const { Account } = require('./db')

// auth middleware
app.use((req, res, next) => {
  if(!req.path.includes('management')) {
    return next()
  }
  const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
  const [email, password] = Buffer.from(b64auth, 'base64').toString().split(':')

  Account.findByPk(email)
    .then(auth => {
      if (auth) {
        if (email && password && email === auth.email && password === auth.password) {
          req.headers.role = auth.clearanceLevel
          return next()
        } else {
          res.set('WWW-Authenticate', 'Basic realm="401"') 
          res.status(403).json(
            {
              message: 'Permission denied.'
            }
          ) 
        }
      } else {
        res.set('WWW-Authenticate', 'Basic realm="401"') 
        res.status(403).json(
          {
            message: 'Permission denied.'
          }
        ) 
      }
    })
    .catch(error => {
      res.set('WWW-Authenticate', 'Basic realm="401"') 
      res.status(403).json(
        {
          message: 'Permission denied.'
        }
      ) 
    })


})

app.use(`${routePrefix}account`, account)
app.use(`${routePrefix}employee`, employee)
app.use(`${routePrefix}auth`, auth)

app.get('/', (req, res) =>{
  res.render('login.html')
})

app.get('/employees', (req, res) =>{
  res.render('list-employee.html')
})

app.get('/employees/:id', (req, res) =>{
  res.render('view-employee.html')
})

app.get('/employees/add', (req, res) =>{
  res.render('add-employee.html')
})

app.get('/employees/edit/:id', (req, res) =>{
  res.render('edit-employee.html')
})

app.get('/accounts', (req, res) =>{
  res.render('list-employee.html')
})

app.get('/accounts/:id', (req, res) =>{
  res.render('view-employee.html')
})

app.get('/accounts/add', (req, res) =>{
  res.render('add-employee.html')
})

app.get('/accounts/edit/:id', (req, res) =>{
  res.render('edit-employee.html')
})

app.listen(6000, async () => {
  console.log("Application started...")
})
