const app = require("./app")
const path = require("path")


app.get("/test", (req, res)=>{
    console.log("dsxzcDc")
})

app.listen(5060, ()=>{
    console.log('running in port 5060')
})
// const rootPath=()=> {
//     return path.dirname(__filename)
// }


// module.exports=rootPath