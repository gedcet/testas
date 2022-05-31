import express from "express"

const express1 = express()

express1.use(express.static("./frontend"))
express1.get("/testas", (req, res) =>
{
    res.statusCode=200
    res.write("Labas1")
    res.end()
})

express1.listen(process.env.PORT || 80)

