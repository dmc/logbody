const express = require('express')
const PORT = process.env.PORT || 5000


express()
.use(express.json())
.get('/', (req, res) => res.send('Hello World!'))
.post("/", (req, res) =>{
  console.log(req.body)
  console.log(JSON.stringify(req.body))
  res.json(req.body);
})

.listen(PORT, () => console.log(`Listening on ${ PORT }`))
