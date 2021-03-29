
const { db, _dirname, _filename } = require('../../config/mongoose')

const Todo = require('../todo')

console.log(_dirname)
console.log(_filename)


// 當連線成功
db.once('open', () => {
  console.log('mongodb connected')

  for (let i = 0; i < 10; i++) {
    Todo.create({ name: `name-${i}` })
  }

  console.log('done')
})