const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.status(200).send("Hello Express App")
})

app.post("/t", (req, res) => {
    res.status(200).send("IT is inside Post")
})

app.listen(5000, () => {
    console.log("Server running in port 5000")
})