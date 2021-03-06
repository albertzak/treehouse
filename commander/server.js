const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

module.exports = () => {
  app.get('/', (req, res) =>
    res.send('Hello World!')
  )

  app.listen(PORT, () =>
    console.log('Listening on Port', PORT)
  )
}
