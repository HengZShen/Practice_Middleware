const express = require('express')

const router = express.Router()

const Todo = require('../../models/todo')



router.get('/new', (req, res) => {
  return res.render('new')
})

// Create
router.post('/', (req, res) => {
  console.log(req.body)
  const name = req.body.name

  // // 建立 todo 實例 在伺服器端 可以操作後再放進資料庫
  // const todo = new Todo({ name })
  // // 放入資料庫
  // todo.save()
  //   .then(() => res.redirect('/'))
  //   .catch(error => console.log(error))

  // 直接在資料庫建立 無法在伺服器操作
  Todo.create({ name })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


// 檢視特定資料
router.get('/:id', (req, res) => {
  const id = req.params.id
  console.log(id)
  return Todo.findById(id)
    .lean()
    .then((todo) => res.render('detail', { todo }))
    .catch(error => console.log(error))
})


// 修改資料
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  console.log(id)
  return Todo.findById(id)
    .lean()
    .then((todo) => res.render('edit', { todo }))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const { name, isDone } = req.body

  return Todo.findById(id)
    .then(todo => {
      todo.name = name
      todo.isDone = isDone === 'on'
      return todo.save()
    })
    .then(() => res.redirect(`/todos/${id}`))
    .catch(error => console.log(error))
})




// 刪除資料
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findById(id)
    .then(todo => todo.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router