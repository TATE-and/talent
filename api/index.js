const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => (
  const user = {
  id:  "1",
  name: "Tate",
  email: "tate05nta@gmail.com"
  }
  res.json(user))
))

app.listen(port, () => {
  console.log(`server  running on port ${port}`)
})

module.exports = app;
