const express = require('express')
const res = require('express/lib/response')
const connection  = require('./db')
const app = express()
const ch = require('./Router/cheerioRouter')

const port = process.env.PORT || 3000
const uri = process.env.URI || "www.google.com"

connection(uri)

app.get("/", (req, res)=>{
    res.send("Kya haal h")
})
app.use("/app/v1/cheerio", ch)

app.listen(port, () => {
    console.log(`Running on ${port}`)
})
