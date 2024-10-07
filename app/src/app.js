const express = require('express')
const app = express()

const mongoose = require('mongoose')

try {
  mongoose.connect(process.env.MONGO_URL)
  console.log("[DB:OK] CONNECT SUCCESSFULLY AT", process.env.MONGO_URL)
} catch(error){
  console.log("[DB:ERROR]", error)
}

app.listen(process.env.PORT, () => {
  console.log(`[APP:OK] App listening on port ${process.env.PORT}`)
})

