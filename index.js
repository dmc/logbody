const express = require('express')
const PORT = process.env.PORT || 5000


express()
.post("/", (req, res) =>{
  console.log("req.body:", req.body)
  res.json(req.body);
})

.listen(PORT, () => console.log(`Listening on ${ PORT }`))
