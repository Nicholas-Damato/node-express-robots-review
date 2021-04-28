const express = require('express')

const app = express();

const PORT = 3077

const robotCtrl = require('./robotController')

app.get('/api/robots', robotCtrl.getRobots)
app.delete('/api/robots/:id', robotCtrl.deleteRobots)

app.listen(PORT, () => console.log(`Your server is up on port: ${PORT}`))