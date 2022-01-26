const express = require('express')
const PORT = process.env.PORT || 5000


express()
.use(express.json())
.get('/', (req, res) => res.send('Hello World!'))
.post("/", (req, res) =>{
  console.log(JSON.stringify(req.body,null,2))
  res.json(req.body);
})

.listen(PORT, () => console.log(`Listening on ${ PORT }`))
