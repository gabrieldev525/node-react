const express = require('express')

const app = express()
const port = process.env.PORT || 5000

app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Hey node js' })
})

app.listen(port, () => console.log(`Server is running on port ${port}`))