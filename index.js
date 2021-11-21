const app = require("./app")


app.get("/test", (req, res)=>{
    res.json("dsxzcDc")
})

app.listen("5060", ()=>{
    console.log('running in port 5060')
})
