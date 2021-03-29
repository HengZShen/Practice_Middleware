const express = require('express')

const router = express.Router()

const Todo = require('../../models/todo')



function helloWorld(req, res, next) {
  console.log('HelloWorld')
  next()

}

// router.use('/', (req, res, next) => {
//   console.log('hi ')
//   next()
// })

router.use('/', helloWorld)


router.get('/', (req, res) => {
  // 拿到所有 Todo 資料
  Todo.find()
    .sort({ _id: 'asc' })
    .then(todos => res.render('index', { todos }))
    .catch(error => console.log(error))

})






module.exports = router